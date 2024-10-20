import * as React from "react"
import Title from "./Title";

const educationData = [
  {
    institution: "University of Texas",
    degree: "Master Degree",
    period: "2020 - 2022",
  },
  {
    institution: "Webster College",
    degree: "Code Expert",
    period: "2018 - 2020",
  },
  {
    institution: "Technology School",
    degree: "Computer Engineering",
    period: "2016 - 2018",
  },
]

const experienceData = [
  {
    company: "Envato Market",
    position: "Exclusive Author",
    period: "2022 - now",
  },
  {
    company: "Cridio Studio",
    position: "Graphic Designer",
    period: "2020 - 2022",
  },
  {
    company: "Allians Group",
    position: "UI Designer",
    period: "2018 - 2020",
  },
]

export default function Education() {
  return (
    <div className="text-sm bg-white bg-opacity-50 bg-grid-gray-100/[0.2] ">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Section title="EDUCATION" data={educationData} />
          <Section title="EXPERIENCE" data={experienceData} />
        </div>
      </div>
    </div>
  )
}

type DataItem = {
  institution?: string;
  company?: string;
  degree?: string;
  position?: string;
  period: string;
};

function Section({ title, data }: { title: string; data: DataItem[] }) {
  return (
    <div>
      <Title className="mb-2.5">{`// ${title}`}</Title>
      <div className="space-y-6">
        {data.map((item: DataItem, index: number) => (
          <Entry key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

function Entry({ institution, company, degree, position, period }: { institution?: string; company?: string; degree?: string; position?: string; period: string}) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-lg">{institution || company}</h3>
        <p className="text-gray-2 font-[15px]">{degree || position}</p>
      </div>
      <div className="border border-gray-1 px-5 py-2.5 text-gray-2 text-xs">
        {period}
      </div>
    </div>
  )
}
