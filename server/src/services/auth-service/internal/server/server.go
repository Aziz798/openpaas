package server

import (
	"github.com/gofiber/fiber/v2"

	"openpaas.tech/server/src/libs/go/database"
	"openpaas.tech/server/src/libs/go/validations"
)

type AuthServer struct {
	*fiber.App

	db database.Service
}

func New() *AuthServer {
	server := &AuthServer{
		App: fiber.New(fiber.Config{
			ServerHeader: "openpaas-auth-service",
			AppName:      "openpaas-auth-service",
			ErrorHandler: func(c *fiber.Ctx, err error) error {
				return c.Status(fiber.StatusBadRequest).JSON(validations.GlobalErrorHandlerResp{
					Success: false,
					Message: err.Error(),
				})
			},
		}),

		db: database.New(),
	}

	return server
}
