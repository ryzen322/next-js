import { db } from "@/server/db";

export async function ComponentsFn() {
  const posts = await db.query.posts.findMany({
    with: {
      author: true,
      // comments: true,
    },
  });

  return (
    <ul className=" flex flex-col gap-2 w-full">
      {posts?.map((item) => (
        <li
          key={item.id}
          className=" flex flex-col w-full items-center text-stone-500 border-b border-rose-500"
        >
          <h1>Posted by: {item.name}</h1>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
}
