import { ComponentsFn } from "@/components/ComponentsFn";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className=" h-screen w-full flex items-center justify-center">
      <section className=" w-2/4 h-96 bg-white shad rounded-sm flex items-center flex-col shadow-xl gap-4">
        <Form />
        <ComponentsFn />
      </section>
    </main>
  );
}
