"use client";
import { FormPostSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createPost } from "@/actions";
import { useCallback } from "react";

const PostForm = ({
  userEmail,
  name,
}: {
  userEmail: string;
  name: string;
  id: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(FormPostSchema),
    defaultValues: {
      title: "",
      content: "",
      name,
      email: userEmail,
    },
  });

  const postsSumbit = useCallback(
    async (formData: z.infer<typeof FormPostSchema>) => {
      const { content, title, email, name } = formData;

      try {
        const data = await createPost({ content, title, email, name });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return (
    <form
      className=" flex flex-col gap-2 w-full"
      onSubmit={handleSubmit(postsSumbit)}
    >
      <input
        {...register("title")}
        placeholder="Title"
        className={` ${
          errors.title?.message ? " outline-red-400" : " outline-none"
        }`}
      />

      <ErrorInputMessage message={errors.title?.message} />
      <input
        {...register("content")}
        placeholder="Context"
        className={` ${
          errors.content?.message ? " outline-red-400" : " outline-none"
        }`}
      />
      <ErrorInputMessage message={errors.content?.message} />

      <Button type="submit" className=" bg-blue-400 " disabled={isSubmitting}>
        {isSubmitting ? "Submiting..." : "Post"}
      </Button>
    </form>
  );
};

export default PostForm;

export function ErrorInputMessage({
  message,
}: {
  message: string | undefined;
}) {
  if (!message) return null;

  return <p className={` text-red-400 `}>{message}</p>;
}
