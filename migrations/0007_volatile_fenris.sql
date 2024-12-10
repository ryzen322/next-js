ALTER TABLE "reply_tweets" RENAME COLUMN "tweetId" TO "commentId";--> statement-breakpoint
ALTER TABLE "reply_tweets" DROP CONSTRAINT "reply_tweets_tweetId_tweet_comment_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reply_tweets" ADD CONSTRAINT "reply_tweets_commentId_tweet_comment_id_fk" FOREIGN KEY ("commentId") REFERENCES "public"."tweet_comment"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
