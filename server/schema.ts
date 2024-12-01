import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const post = pgTable("post", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  age: integer("age").notNull(),
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
