ALTER TABLE "comments" RENAME COLUMN "text" TO "name";--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN "content" text;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;