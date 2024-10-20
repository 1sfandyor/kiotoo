import * as React from "react"
import Title from "./Title"
import { Card, CardContent } from "./ui/card"

const funFacts = [
  { stat: "200+", description: "Projects Completed" },
  { stat: "45k+", description: "Lines of Code" },
  { stat: "300+", description: "Drinks of Pepsi" },
  { stat: "100%", description: "Satisfaction Guarantee" },
]

export default function FunFact() {
  return (
    <div className="w-full">
      <Title>{'// FUN FACTS'}</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {funFacts.map((fact, index) => (
          <Card key={index} className="border bg-transparent border-gray-200">
            <CardContent className="p-6 text-center">
              <p className="text-[25px] font-semibold mb-2">{fact.stat}</p>
              <p className="text-sm text-gray-600">{fact.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}