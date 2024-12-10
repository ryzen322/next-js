import { db } from "@/server/db";
import React from "react";

const Tweets = async () => {
  const tweets = await db.query.tweets.findMany({
    with: {
      comments: true,
    },
  });
  return (
    <ul className=" flex flex-col gap-2 w-full">
      {tweets?.map((item) => (
        <li
          key={item.id}
          className=" flex flex-col w-full items-center text-stone-500 border-b border-rose-500"
        >
          <h1>Posted by: {item.name}</h1>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <div className=" w-full flex items-center flex-col mt-4">
            {item.comments.map((comment) => (
              <div key={comment.id}>Reply: {comment.content}</div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tweets;
