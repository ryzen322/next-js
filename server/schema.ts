import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

export const post = pgTable("post", {
  id: uuid().defaultRandom().primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
});

export const user = pgTable("user", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  title: text("title").notNull(),
});

export type InsertPost = typeof post.$inferInsert;
export type SelectPost = typeof post.$inferSelect;

export type InsertUser = typeof user.$inferInsert;
export type SelectUser = typeof user.$inferSelect;
