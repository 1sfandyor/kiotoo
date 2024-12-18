import * as React from "react"
import { Progress } from "@/components/ui/progress"
import Title from "./Title"

const skills = {
  programming: [
    { name: "HTML & CSS", value: 95 },
    { name: "JavaScript", value: 80 },
    { name: "WordPress", value: 90 },
  ],
  language: [
    { name: "English", value: 95 },
    { name: "Japanese", value: 80 },
    { name: "Arabic", value: 90 },
  ],
}

export default function Skills() {
  return (
      <div className="flex flex-col xl:flex-row">
        <SkillSection title="// PROGRAMMING SKILLS" skills={skills.programming} />
        <SkillSection title="// LANGUAGE SKILLS" skills={skills.language} />
      </div>
  )
}

function SkillSection({ title, skills }: { title: string; skills: { name: string; value: number }[] }) {
  return (
    <div className={`${title === '// LANGUAGE SKILLS' && 'pb-[110px] md:pb-[60px] mb-[100px] border-b border-gray-1  xl:pl-[50px] xl:pr-0'} xl:pr-[50px] border-b border-gray-1 mb-[60px] w-full`}>
      <Title className="mb-[52px]">{title}</Title>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-gray-2 mb-1">
              <span className="font-mono text-sm">{skill.name}</span>
              <span className="font-mono text-sm">{skill.value}%</span>
            </div>
            <Progress value={skill.value} className="h-0.5 " />
          </div>
        ))}
      </div>
    </div>
  )
}
