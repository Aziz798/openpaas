package server

import (
	"github.com/gofiber/fiber/v2"

	"openpaas.tech/server/internal/database"
)

type FiberServer struct {
	*fiber.App

	db database.Service
}

func New() *FiberServer {
	server := &FiberServer{
		App: fiber.New(fiber.Config{
			ServerHeader: "server",
			AppName:      "server",
		}),

		db: database.New(),
	}

	return server
}
