import { db } from "@/server/db";
import { post } from "@/server/schema";

async function ComponentsFn() {
  const data = await db.select().from(post);

  console.log(typeof data[0].name);

  return <div className="">{JSON.stringify(data)}</div>;
}

export default function Home() {
  return (
    <main className=" h-screen w-full flex items-center justify-center">
      <section className=" w-2/4 h-96 bg-white shad rounded-sm flex items-center flex-col shadow-xl">
        <ComponentsFn />
      </section>
    </main>
  );
}
