"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data/partners";
import Title from "./Title";

export function Partners() {
  return (
    <div className="rounded-md flex flex-col dark:bg-black dark:bg-grid-white/[0.05] items-start justify-center relative overflow-hidden border-b border-gray-1 pb-[110px] mb-[100px]">
      <Title className="mb-[60px]">{'// Trusted parners'}</Title>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}