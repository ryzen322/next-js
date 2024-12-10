CREATE TABLE IF NOT EXISTS "tweet_comment" (
	"id" serial PRIMARY KEY NOT NULL,
	"tweetId" serial NOT NULL,
	"content" text,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tweet" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text,
	"title" text,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tweet_comment" ADD CONSTRAINT "tweet_comment_tweetId_tweet_id_fk" FOREIGN KEY ("tweetId") REFERENCES "public"."tweet"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
