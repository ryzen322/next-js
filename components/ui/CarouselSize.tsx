import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const array = Array.from({ length: 25 });

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm phone:max-w-[450px] sm:max-w-[560px] md:max-w-[700px]  lg:max-w-full"
    >
      <CarouselContent>
        <CarouselItem className={`basis-1/`}>
          <div className="p-1">
            <Card>
              <CardContent className=" h-[5.5rem] w-[4rem] flex items-center justify-center phone:h-[7rem] phone:w-[5.75rem]">
                <span className="text-xs font-semibold">Create</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        {array.map((_, index) => (
          <CarouselItem key={index} className={`basis-1/${array.length}`}>
            <div className="p-1">
              <Card>
                <CardContent className=" h-[5.5rem] w-[4rem] flex items-center justify-center phone:h-[7rem] phone:w-[5.75rem]">
                  <span className="text-xs font-semibold">
                    Stories {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
