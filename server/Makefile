db-generate:
	@echo "Generating database..."
	@pnpm run db:generate

db-migrate:
	@echo "Migrating database..."
	@pnpm run db:migrate

db-studio:
	@echo "Opening database studio..."
	@pnpm run db:studio
# Create DB container
docker-run:
	@if docker compose up -d 2>/dev/null; then \
		: ; \
	else \
		echo "Falling back to Docker Compose V1"; \
		docker-compose up -d; \
	fi

# Shutdown DB container
docker-down:
	@if docker compose down 2>/dev/null; then \
		: ; \
	else \
		echo "Falling back to Docker Compose V1"; \
		docker-compose down; \
	fi


# Clean the binary
clean:
	@echo "Cleaning..."
	@rm -rf bin 
