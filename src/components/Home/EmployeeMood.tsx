import React from 'react';
import { Card } from "../ui/card";
import { SmilePlus, Heart, Frown } from "lucide-react";

const moodData = [
  {
    title: "OVERALL TODAY",
    status: "Happy",
    percentage: "80% employees are happy today",
    icon: SmilePlus,
    color: "text-yellow-500",
  },
  {
    title: "HAPPIEST TEAM TODAY",
    status: "Development Team",
    percentage: "95% employees are happy",
    icon: Heart,
    color: "text-pink-500",
  },
  {
    title: "NOT SO HAPPY TEAM",
    status: "Sales Team",
    percentage: "53% employees marked their status as 'ok'",
    icon: Frown,
    color: "text-gray-500",
  },
];

export function EmployeeMood() {
  return (
    <div className="space-y-3 md:space-y-4">
      {moodData.map((item) => (
        <Card key={item.title} className="p-3 md:p-4 w-[362px] h-[119px]">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="rounded-full bg-gray-100 p-2">
              <item.icon className={`h-5 w-5 md:h-6 md:w-6 ${item.color}`} />
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground">{item.title}</p>
              <p className="font-medium">{item.status}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{item.percentage}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
