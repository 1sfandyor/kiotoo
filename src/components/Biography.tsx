import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import Title from "./Title"
import { PersonalInfo } from "./PersonalInfo"

const biographyText = `Hi, my name is Jessica Parker and I began using WordPress when it first began. I've spent most of my waking hours for the last ten years designing, programming and operating WordPress sites. One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel.`

export default function Biography() {
  return (
    <ScrollArea className="w-full">
      <div className="flex flex-col md:flex-row md:items-start items-center pb-[100px] mb-[100px] border-b border-gray-1">
        <BiographySection title="// Biography" />
        <PersonalDetailsSection title="// Personal Details" />
      </div>
    </ScrollArea>
  )
}

function BiographySection({ title }: { title: string }) {
  return (
    <div className={`w-full md:pr-[25px] mb-[60px]`}>
      <Title className="mb-[52px]">{title}</Title>
      <p className="mb-[30px] text-gray-2 w-full">
        {biographyText}
      </p>
      <Button variant="outline" className="font-mono text-sm">
        Download CV
      </Button>
    </div>
  )
}

function PersonalDetailsSection({ title }: { title: string }) {
  return (
    <div className="md:pr-[25px] xl:pl-[50px] w-full">
      <Title className="mb-[52px]">{title}</Title>
      <PersonalInfo />
    </div>
  )
}