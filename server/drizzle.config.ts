import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

if (!DB_HOST || !DB_PORT || !DB_USERNAME || !DB_PASSWORD || !DB_NAME) {
    throw new Error(
        "Missing required environment variables for database connection.",
    );
}
const DB_URL =
    `postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
export default defineConfig({
    out: "./migrations",
    schema: "./cmd/migration-service/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: DB_URL,
    },
});
