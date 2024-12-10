"use server";

import { auth, signIn, signOut } from "@/auth";
import { db } from "@/server/db";
import { posts, tweets } from "@/server/schema";
import { FormPostSchema, FormTweetSchema } from "@/types";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const loginGoogle = async () => {
  await signIn();
};
export const signOutAuth = async () => {
  await signOut();
};

export const createPost = async (formData: z.infer<typeof FormPostSchema>) => {
  const users = await auth();
  const email = users?.user?.email as string;
  const name = users?.user?.name as string;

  if (!users) return `Please login`;

  const postFormValidation = FormPostSchema.safeParse(formData);
  if (!postFormValidation.success) {
    return {
      message: `Database Error: Failed to Delete Invoice ${postFormValidation.error.message}`,
    };
  }
  try {
    const { content, title } = postFormValidation.data;

    await db.insert(posts).values({ name, content, title, email });

    revalidatePath("/");
    return { message: "succes fully added new data ", postFormValidation };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Invoice", error };
  }
};

export const createTweetPost = async (
  tweetPost: z.infer<typeof FormTweetSchema>
) => {
  const users = await auth();
  const email = users?.user?.email as string;
  const name = users?.user?.name as string;

  if (!users) return `Please login`;

  const tweetFromValidation = FormTweetSchema.safeParse(tweetPost);
  if (!tweetFromValidation.success) {
    return {
      message: `Database Error: Failed to Delete Invoice ${tweetFromValidation.error.message}`,
    };
  }
  try {
    const { content, title } = tweetFromValidation.data;

    await db.insert(tweets).values({ content, title, name, email });
    revalidatePath("/tweet");
    return { message: "succes fully added new data ", tweetFromValidation };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Invoice", error };
  }
};
