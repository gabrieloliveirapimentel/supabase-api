CREATE TABLE "users" (
	"uuid" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
