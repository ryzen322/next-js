import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";
export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
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
