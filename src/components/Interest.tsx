import * as React from "react"
import { Check } from "lucide-react"
import Title from "./Title"

const interestsData = [
  "Web Design",
  "Learning Figma",
  "Playing PUBG",
  "Watching Cinema",
  "Reading Books",
]

const awardsData = [
  "The Best Coder 2024",
  "IT Instructor PRO",
  "CSS Design Awards",
  "The Webby Awards",
  "The Horizon Interactive",
]

export default function Interest() {
  return (
        <div className="flex flex-col mid:flex-row">
          <Section title="INTERESTS" items={interestsData} />
          <Section title="AWARDS" items={awardsData} />
        </div>
  )
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={`${title === 'AWARDS' && 'pb-[110px] md:pb-[60px] mb-[100px] border-b border-gray-1 mid:pl-[50px] xl:md-0 lg:pl-[50px] lg:pr-0'} w-full lg:pr-[50px] border-b border-gray-1 mb-[60px]`}>
      <Title className="mb-[50px]">{`// ${title}`}</Title>
      <ul className="space-y-2 mb-[60px] md:mb-0">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-2">
            <Check className="w-4 h-4 mr-2" />
            <span className="text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
