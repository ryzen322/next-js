"use server";
import { createPost, deletePost } from "@/server/api";
import { revalidatePath } from "next/cache";

export async function insertPostAction(formData: FormData) {
  const name = formData.get("name") as string;
  const title = formData.get("title") as string;
  const age = Number(formData.get("number"));

  await createPost({ name: name, title: title, age });

  revalidatePath("/");
}

export async function deletePostAction(id: number) {
  deletePost(id);

  revalidatePath("/");
}
