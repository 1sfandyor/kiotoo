import { personalInfoData } from "@/data/personalInfo";
import React from "react";


export const PersonalInfo = () => {

  return (
    <div className="mt-10">
      <ul className="flex flex-col items-start xl:gap-x-4 xl:gap-y-2">
        {Object.entries(personalInfoData).map(([key, value]) => (
          <span className="flex items-center" key={key}>
            <li className="font-semibold text-black inline mr-1.5 xl:w-[140px]">{key}:</li>
            <li className="text-gray-2">{value}</li>
          </span>
        ))}
      </ul>
    </div>
  )
}