package user

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/jackc/pgx/v5/pgtype"

	"github.com/jmoiron/sqlx"
	"openpaas.tech/server/src/libs/go/email"
	"openpaas.tech/server/src/libs/go/middleware"
	"openpaas.tech/server/src/libs/go/utils"
	"openpaas.tech/server/src/libs/go/validations"
	"openpaas.tech/server/src/services/auth-service/internal/types"
)

func RegisterUserRoutes(app fiber.Router, db *sqlx.DB) {
	api := app.Group("/users")
	v := validations.GetGlobalValidator()
	api.Post("/register", func(c *fiber.Ctx) error {
		return registerUserWithEmailHandler(c, db, v)
	})
	authenticatedRoutes := api.Group("/", middleware.AuthenticationMiddleware())
	authenticatedRoutes.Post("/verify-otp", func(c *fiber.Ctx) error {
		return VerifyOTPHandler(c, db, v)
	})

}

func registerUserWithEmailHandler(c *fiber.Ctx, db *sqlx.DB, v validations.Validator) error {
	var userRegistration types.UserRegistrationType
	if err := c.BodyParser(&userRegistration); err != nil {
		log.Printf("error parsing request body: %s", err.Error())
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}
	errList := v.Validate(userRegistration)
	if len(errList) > 0 {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{"status": "failed", "error": errList})
	}
	exists, err := userExistsQuery(userRegistration.Email, db)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Internal server error",
		})
	}
	if exists {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"error": "User already exists",
		})
	}
	hashedPassword, err := utils.HashPassword(userRegistration.Password)
	if err != nil {
		log.Printf("error hashing password: %s", err.Error())
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Internal server error",
		})
	}
	userRegistration.Password = hashedPassword
	otpCode, userId, err := createUserByEmailQuery(userRegistration, db)
	if err != nil {
		log.Printf("error creating user: %s", err.Error())
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Internal server error",
		})
	}

	var uuid pgtype.UUID
	if err := uuid.Scan(userId); err != nil {
		log.Printf("error converting userId to UUID: %s", err.Error())
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Internal server error",
		})
	}

	token, refreshToken, err := utils.GenerateToken(uuid, "user", false, false)
	if err != nil {
		log.Printf("error generating token: %s", err.Error())
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Internal server error",
		})
	}

	if err := email.SendEmailVerificationEmail(otpCode, userRegistration.Email); err != nil {
		log.Printf("error sending email: %s", err.Error())
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Could not send verification email",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"status": "success",
		"data": fiber.Map{
			"message":       "User created successfully",
			"token":         token,
			"refresh_token": refreshToken,
		},
	})
}

func VerifyOTPHandler(c *fiber.Ctx, db *sqlx.DB, v validations.Validator) error {
	var otpCode struct {
		Code string `json:"code" validate:"required,min=6,max=6"`
	}
	if err := c.BodyParser(&otpCode); err != nil {
		log.Printf("error parsing request body: %s", err.Error())
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid request body",
		})
	}
	errList := v.Validate(otpCode)
	if len(errList) > 0 {
		return c.Status(fiber.StatusBadRequest).JSON(&fiber.Map{"status": "failed", "error": errList})
	}
	hashedOtp, err := getUserOtpCodeQuery(c.Locals("user_id").(string), db)
	if err != nil {
		log.Printf("error getting user OTP code: %s", err.Error())
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Internal server error",
		})
	}
	if err := utils.VerifyOTP(hashedOtp, otpCode.Code); err != nil {
		log.Printf("error verifying OTP: %s", err.Error())
		log.Printf("Invalid OTP code: %s", otpCode.Code)
		log.Printf("Hashed OTP: %s", hashedOtp)
		log.Printf("Generated OTP hash: %s (len: %d)\n", hashedOtp, len(hashedOtp))

		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid OTP code",
		})
	}
	err = verifyUserOtpCodeQuery(c.Locals("user_id").(string), db)
	if err != nil {
		log.Printf("error verifying user OTP code: %s", err.Error())
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Internal server error",
		})
	}
	var uuid pgtype.UUID
	if err := uuid.Scan(c.Locals("user_id")); err != nil {
		log.Printf("error converting userId to UUID: %s", err.Error())
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Internal server error",
		})
	}

	token, refreshToken, err := utils.GenerateToken(uuid, c.Locals("user_role").(string), c.Locals("is_premium").(bool), true)
	if err != nil {
		log.Printf("error generating token: %s", err.Error())
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Internal server error",
		})
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"status": "success",
		"data": fiber.Map{
			"message":       "User verified successfully",
			"token":         token,
			"refresh_token": refreshToken,
		},
	})
}
