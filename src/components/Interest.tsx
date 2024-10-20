import * as React from "react"
import { Check } from "lucide-react"

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
    <div className="text-sm ">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Section title="INTERESTS" items={interestsData} />
          <Section title="AWARDS" items={awardsData} />
        </div>
      </div>
    </div>
  )
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-b border-gray-2 mb-[100px] pb-[100px]">
      <h2 className="text-lg font-semibold mb-6">{`// ${title}`}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-4 h-4 mr-2 text-gray-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
