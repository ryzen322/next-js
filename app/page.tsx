import { CarouselSize } from "@/components/ui/CarouselSize";

export default function Home() {
  return (
    <main className=" w-full flex flex-col gap-4 px-2">
      {/* <ul className=" max-w-[400px] flex items-center  h-32 gap-2 overflow-x-auto ">
        <li className=" rounded-lg bg-muted/50 h-full min-w-28 w-28"></li>
        <li className=" rounded-lg bg-muted/50 h-full min-w-28 w-28"></li>
        <li className=" rounded-lg bg-muted/50 h-full min-w-28 w-28"></li>
        <li className=" rounded-lg bg-muted/50 h-full min-w-28 w-28"></li>
      </ul> */}
      <CarouselSize />
    </main>
  );
}
