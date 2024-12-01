"use server";
import { db } from "@/server/db";
import { InsertPost, post } from "@/server/schema";
import { revalidatePath } from "next/cache";

export async function createPost(data: InsertPost) {
  await db.insert(post).values(data);
}

export async function insertPostAction(formData: FormData) {
  const name = formData.get("name") as string;
  const title = formData.get("title") as string;

  await createPost({ name: name, title: title });

  revalidatePath("/");
}
