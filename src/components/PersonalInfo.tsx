import { personalInfoData } from "@/data/personalInfo";
import React from "react";


export const PersonalInfo = () => {

  return (
    <div className="mt-10">
      <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
        {Object.entries(personalInfoData).map(([key, value]) => (
          <React.Fragment key={key}>
            <dt className="font-semibold text-black w-[140px]">{key}:</dt>
            <dd className="text-gray-2">{value}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  )
}