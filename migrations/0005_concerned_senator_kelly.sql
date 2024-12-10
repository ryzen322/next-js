ALTER TABLE "tweet_comment" DROP CONSTRAINT "tweet_comment_tweetId_tweet_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tweet_comment" ADD CONSTRAINT "tweet_comment_tweetId_tweet_id_fk" FOREIGN KEY ("tweetId") REFERENCES "public"."tweet"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
