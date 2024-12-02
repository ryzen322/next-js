import { db } from "@/server/db";
import { post } from "@/server/schema";
import Link from "next/link";

export async function ComponentsFn() {
  const data = await db.select().from(post);

  return (
    <ul className=" flex flex-col gap-2">
      {data.length < 0 ? (
        <li>No data</li>
      ) : (
        data.map((item) => (
          // <Link key={item.id}>
          //   {item.title} {item.name} {item.age}
          // </Link>
          <Link href={`/details/${item.id}`} key={item.id}>
            {item.title}
          </Link>
        ))
      )}
    </ul>
  );
}
