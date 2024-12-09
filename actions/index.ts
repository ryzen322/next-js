"use server";

import { signIn, signOut } from "@/auth";
import { db } from "@/server/db";
import { posts } from "@/server/schema";
import { FormPostSchema } from "@/types";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const loginGoogle = async () => {
  await signIn();
};
export const signOutAuth = async () => {
  await signOut();
};

export const createPost = async (
  email: string,
  name: string,
  formData: z.infer<typeof FormPostSchema>
) => {
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
