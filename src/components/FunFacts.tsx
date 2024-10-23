import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Title from "./Title";

export default function FunFact() {

  const items = [
    {
      title: "200+",
      description: "Project Completed",
    },
    {
      title: "45K+",
      description: "Lines of code",
    },
    {
      title: "300+",
      description: "Drinks of Coffee",
    },
    {
      title: "100%",
      description: "Satisfaction Guarantee",
    },
  ];

  
  return (
    <div className="mb-[100px] pb-[100px] border-b border-gray-1">
      <Title className="mb-[60px]">Fun Facts</Title>
      <BentoGrid className="">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

