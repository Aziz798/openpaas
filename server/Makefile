docker-run:
	docker-compose --env-file .env -f src/config/docker-compose.yml up -d

docker-stop:
	docker-compose -f config/docker-compose.yml down

db-generate:
	pnpm run db:generate

db-migrate:
	pnpm run db:migrate

db-push:
	pnpm run db:push

db-studio:
	pnpm run db:studio
