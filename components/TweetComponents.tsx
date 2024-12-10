"use client";
import { FormTweetSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { z } from "zod";
import { createTweetPost } from "@/actions";

const TweetComponents = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(FormTweetSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const postsSumbit = useCallback(
    async (tweetPost: z.infer<typeof FormTweetSchema>) => {
      const { content, title } = tweetPost;

      try {
        const data = await createTweetPost({ content, title });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    []
  );

  return (
    <div className=" w-2/4 flex flex-col">
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

        <input
          {...register("content")}
          placeholder="Context"
          className={` ${
            errors.content?.message ? " outline-red-400" : " outline-none"
          }`}
        />

        <Button type="submit" className=" bg-blue-400 " disabled={isSubmitting}>
          {isSubmitting ? "Submiting..." : "Post"}
        </Button>
      </form>
    </div>
  );
};

export default TweetComponents;
