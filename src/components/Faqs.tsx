import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Faqs() {
  return (
    <>
      {/* ACCORDIONS */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Where is my order?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            totam fuga veniam aperiam rerum voluptatem neque voluptatibus illo
            earum non, iste eligendi, ad magni esse inventore pariatur facere
            saepe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How can I return an item purchased online?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            totam fuga veniam aperiam rerum voluptatem neque voluptatibus illo
            earum non, iste eligendi, ad magni esse inventore pariatur facere
            saepe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I cancel or change my order?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            totam fuga veniam aperiam rerum voluptatem neque voluptatibus illo
            earum non, iste eligendi, ad magni esse inventore pariatur facere
            saepe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            I have a promotional or discount code?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            totam fuga veniam aperiam rerum voluptatem neque voluptatibus illo
            earum non, iste eligendi, ad magni esse inventore pariatur facere
            saepe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            What are the deliver types you use?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            totam fuga veniam aperiam rerum voluptatem neque voluptatibus illo
            earum non, iste eligendi, ad magni esse inventore pariatur facere
            saepe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>How can I pay for my purchase?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            totam fuga veniam aperiam rerum voluptatem neque voluptatibus illo
            earum non, iste eligendi, ad magni esse inventore pariatur facere
            saepe.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* END ACCORDIONS */}
    </>
  );
}
