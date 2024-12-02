import { eq } from "drizzle-orm";
import { db } from "./db";
import { InsertPost, post, SelectPost } from "./schema";

export const getDetails = async (titleId: number) => {
  const detail = await db.query.post.findMany({
    where: (post, { eq }) => eq(post.id, Number(titleId)),
  });

  return detail;
};

export const getAllPosts = async () => {
  const data = await db.select().from(post);
  return data;
};

export async function createPost(data: InsertPost) {
  await db.insert(post).values(data);
}

export async function deletePost(id: SelectPost["id"]) {
  await db.delete(post).where(eq(post.id, id));
}
