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
      className="w-full max-w-sm phone:max-w-[450px] sm:max-w-full"
    >
      <CarouselContent>
        {array.map((_, index) => (
          <CarouselItem key={index} className={`basis-1/${array.length}`}>
            <div className="p-1">
              <Card>
                <CardContent className=" h-[7.5rem] w-[6rem] flex items-center justify-center">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
