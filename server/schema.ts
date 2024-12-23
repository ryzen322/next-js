import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";

export const RoleEnum = pgEnum("role", ["user", "admin"]);

// for authentication logic schema
export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  twoFactorEnabled: boolean("twoFactorEnabled").default(false),
  role: RoleEnum("role").default("user"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);
export const verificationTokens = pgTable(
  "verificationToken",
  {
    id: serial("id").notNull(),
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
    email: text("email").notNull(),
  },

  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  })
);

// end of authentication logic schema

// posting data examples
export const usersData = pgTable("usersData", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

// posts []
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  content: text("content"),
  title: text("title"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  authorId: integer("author_id"),
});

// post relation to user userData: [post: {}]
export const usersRelations = relations(usersData, ({ many }) => ({
  posts: many(posts),
}));

// post relation
export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(usersData, {
    fields: [posts.authorId],
    references: [usersData.id],
  }),
  comments: many(comments),
}));

// comment schemma
export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postId: integer("post_id"),
  name: text("name"),
  content: text("content"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// comments relation to user post: [comments: {}]
export const commentsRelations = relations(comments, ({ one }) => ({
  comment: one(posts, {
    fields: [comments.postId],
    references: [posts.id],
  }),
}));

//

export const tweets = pgTable("tweet", {
  id: serial("id").primaryKey(),
  content: text("content"),
  title: text("title"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  image: text("image"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const tweetComment = pgTable("tweet_comment", {
  id: serial("id").primaryKey(),
  tweetId: serial("tweetId")
    .references(() => tweets.id, { onDelete: "cascade" }) // Foreign key reference to `tweet` table's `id`
    .notNull(),
  content: text("content"),
  name: text("name"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const tweetsRelations = relations(tweets, ({ many }) => ({
  comments: many(tweetComment),
}));

export const tweetCommentsRelations = relations(tweetComment, ({ one }) => ({
  author: one(tweets, {
    fields: [tweetComment.tweetId],
    references: [tweets.id],
  }),
}));
export const replyTweets = pgTable("reply_tweets", {
  id: serial("id").primaryKey(),
  commentId: serial("commentId") // Updated for clarity
    .references(() => tweetComment.id, { onDelete: "cascade" })
    .notNull(),
  content: text("content"),
  name: text("name"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// reply to comment tweets
export const replyTweetsCommentRelations = relations(
  replyTweets,
  ({ one }) => ({
    author: one(tweetComment, {
      fields: [replyTweets.commentId], // Foreign key field
      references: [tweetComment.id], // Primary key in `tweetComment`
    }),
  })
);

export const replyTweetsRelation = relations(tweetComment, ({ many }) => ({
  reply: many(replyTweets),
}));

export type InsertTweet = typeof tweets.$inferInsert;
export type InsertComment = typeof comments.$inferInsert;
export type InsertPost = typeof posts.$inferInsert;
