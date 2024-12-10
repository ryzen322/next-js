CREATE TABLE IF NOT EXISTS "usersData" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "author_id" integer;