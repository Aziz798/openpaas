CREATE TYPE "public"."login_providers" AS ENUM('email', 'google', 'github');--> statement-breakpoint
CREATE TYPE "public"."user_roles" AS ENUM('admin', 'user');--> statement-breakpoint
CREATE TYPE "public"."user_status" AS ENUM('active', 'inactive');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"role" "user_roles" DEFAULT 'user' NOT NULL,
	"password" varchar(255),
	"is_active" boolean DEFAULT false,
	"is_premium" boolean DEFAULT false,
	"premium_start_date" date,
	"premium_end_date" date,
	"login_provider" "login_providers" NOT NULL,
	"login_provider_id" varchar(255),
	"status" "user_status" DEFAULT 'inactive' NOT NULL,
	"otp_secret" varchar(10),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE UNIQUE INDEX "email" ON "users" USING btree ("email");