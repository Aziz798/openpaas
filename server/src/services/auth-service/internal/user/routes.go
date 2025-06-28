package user

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jmoiron/sqlx"
	"openpaas.tech/server/src/libs/go/middleware"
	"openpaas.tech/server/src/libs/go/validations"
)

// RegisterUserRoutes registers all user-related routes
func RegisterUserRoutes(app fiber.Router, db *sqlx.DB) {
	api := app.Group("/users")
	v := validations.GetGlobalValidator()

	// Public routes
	api.Post("/register", func(c *fiber.Ctx) error {
		return RegisterHandler(c, db, v)
	})

	// Authenticated routes
	authenticatedRoutes := api.Group("/", middleware.AuthenticationMiddleware())
	authenticatedRoutes.Post("/verify-otp", func(c *fiber.Ctx) error {
		return VerifyOTPHandler(c, db, v)
	})
}
