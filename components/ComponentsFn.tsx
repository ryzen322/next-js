import { db } from "@/server/db";
import { post } from "@/server/schema";

export async function ComponentsFn() {
  const data = await db.select().from(post);

  return (
    <ul className="">
      {data.length < 0 ? (
        <li>No data</li>
      ) : (
        data.map((item) => <li key={item.id}>{item.title}</li>)
      )}
    </ul>
  );
}
