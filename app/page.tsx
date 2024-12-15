import Feed from "@/components/Feed";
import { CarouselSize } from "@/components/ui/CarouselSize";

export default function Home() {
  return (
    <div className=" container mx-auto flex flex-1 flex-col gap-2 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-1 ">
        <CarouselSize />
      </div>
      <div className="min-h-[100vh] flex-1 w-full rounded-xl  md:min-h-min flex flex-col items-center ">
        <Feed />
      </div>
    </div>
  );
}
