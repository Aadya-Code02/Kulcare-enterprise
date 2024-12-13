import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import { Users, Activity, Building2, TestTubes } from "lucide-react";

const coverageData = [
  { title: "Doctors", value: "120", icon: Users, color: "bg-blue-500" },
  { title: "Imaging labs", value: "34", icon: Activity, color: "bg-purple-500" },
  { title: "labs", value: "45", icon: Building2, color: "bg-emerald-500" },
  { title: "Path labs", value: "44", icon: TestTubes, color: "bg-pink-500" },
];

export function ProviderCoverage() {
  return (
    <div className="gap-4">
      {coverageData.map((item) => (
        <div key={item.title} className="m-2">
          <Card className="p-4 md:p-6 w-full max-w-[312px] h-[141px] ml-9">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className={`${item.color} p-2 rounded-lg shrink-0`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-sm font-medium text-muted-foreground truncate">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-xl md:text-2xl font-bold">
                    {item.value}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* You can place additional content here if needed */}
            </CardContent>
            <CardFooter>
              {/* Optionally, add footer content here */}
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

