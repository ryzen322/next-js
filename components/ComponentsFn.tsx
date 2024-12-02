import Link from "next/link";
import { getAllPosts } from "@/server/api";
import RemovePost from "./RemovePost";

export async function ComponentsFn() {
  const data = await getAllPosts();

  console.log(data);

  return (
    <ul className=" flex flex-col gap-2 w-full">
      {data.length <= 0 ? (
        <li>No data</li>
      ) : (
        data.map((item) => (
          <li
            key={item.id}
            className=" w-full flex justify-between items-start"
          >
            <Link href={`/details/${item.id}`} key={item.id}>
              {item.title}
            </Link>

            <RemovePost id={item.id} />
          </li>
        ))
      )}
    </ul>
  );
}
