"use server";

import { signIn, signOut } from "@/auth";
import { db } from "@/server/db";
import { posts } from "@/server/schema";
import { revalidatePath } from "next/cache";

export const loginGoogle = async () => {
  await signIn();
};
export const signOutAuth = async () => {
  await signOut();
};

export const createPost = async (email: string, formData: FormData) => {
  const title = formData.get("title") as string;
  const name = formData.get("name") as string;
  const content = formData.get("content") as string;

  await db.insert(posts).values({ name, content, title, email });

  revalidatePath("/");
};
