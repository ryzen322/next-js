CREATE TABLE IF NOT EXISTS "reply_tweets" (
	"id" serial PRIMARY KEY NOT NULL,
	"tweetId" serial NOT NULL,
	"content" text,
	"name" text,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "tweet_comment" ADD COLUMN "name" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reply_tweets" ADD CONSTRAINT "reply_tweets_tweetId_tweet_comment_id_fk" FOREIGN KEY ("tweetId") REFERENCES "public"."tweet_comment"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
