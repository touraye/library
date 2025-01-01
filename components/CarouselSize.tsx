import * as React from "react"

import books from "@/data/books.json"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export function CarouselSize() {
  console.log(books);
  
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full carousel-card-size ml-6"
    >
      <CarouselContent>
        {books?.map((book) => (
          <CarouselItem key={book.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className=" aspect-square items-center justify-center p-6">
                  <Image 
                    src={book.image}
                    alt={book.title}
                    width={100}
                    height={100}
                  />
                  <p className="text-2x1 font-light">{book.title}</p>                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
