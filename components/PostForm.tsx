"use client";

import { FormPostSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

import React from "react";

import { Button } from "./Button";

import { useForm } from "react-hook-form";
import { createPost } from "@/api/actions";
import { z } from "zod";

const PostForm = ({ userEmail }: { userEmail: string }) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(FormPostSchema),
    defaultValues: {
      name: "",
      title: "",
      content: "",
    },
  });

  //   console.log(errors);

  async function onSubmit(formData: z.infer<typeof FormPostSchema>) {
    const { name, content, title } = formData;

    try {
      const data = createPost(userEmail, { name, content, title });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      className=" flex flex-col gap-2 w-full"
      //   action={createPost.bind(null, userEmail)}
      //   action={(data: FormData) => {
      //     const formdata = {
      //       name: data.get("name") as string,
      //       title: data.get("title") as string,
      //       content: data.get("title") as string,
      //     };

      //     createPost(userEmail, formdata);
      //   }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input {...register("name")} placeholder="Name" />
      <input {...register("title")} placeholder="Title" />

      <input {...register("content")} placeholder="Context" />

      <Button type="submit" className=" bg-blue-400 ">
        Submit
      </Button>
    </form>
  );
};

export default PostForm;
