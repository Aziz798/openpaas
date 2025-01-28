import "dotenv/config";
import { defineConfig } from "drizzle-kit";

function getEnvVar(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(
            `Environment variable ${name} is required but not set.`,
        );
    }
    return value;
}

const dbConfig = {
    host: getEnvVar("DB_HOST"),
    port: getEnvVar("DB_PORT"),
    name: getEnvVar("DB_NAME"),
    user: getEnvVar("DB_USER"),
    password: getEnvVar("DB_PASSWORD"),
};

export default defineConfig({
    out: "./migrations",
    schema: "./src/services/db-migrations-service/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: `postgresql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`,
    },
});
