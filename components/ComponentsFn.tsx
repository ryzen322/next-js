import { auth } from "@/auth";
import { db } from "@/server/db";

export async function ComponentsFn() {
  const data = await db.query.usersData.findFirst({
    where: (usersData, { eq }) => eq(usersData.id, 1),
    with: {
      posts: {
        with: {
          comments: true,
          author: true,
        },
      },
    },
  });

  const user = await auth();
  console.log(user);
  console.log(data);

  return <ul className=" flex flex-col gap-2 w-full"></ul>;
}
