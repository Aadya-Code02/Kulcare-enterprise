import { Card } from "@/components/ui/card";
import { Users, Activity, Building2, TestTubes } from "lucide-react";

const coverageData = [
  { title: "Doctors", value: "120", icon: Users, color: "bg-blue-500" },
  { title: "Imaging labs", value: "34", icon: Activity, color: "bg-purple-500" },
  { title: "labs", value: "45", icon: Building2, color: "bg-emerald-500" },
  { title: "Path labs", value: "44", icon: TestTubes, color: "bg-pink-500" },
];

export function ProviderCoverage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {coverageData.map((item) => (
        <Card key={item.title} className="p-6">
          <div className="flex items-center gap-4">
            <div className={`${item.color} p-2 rounded-lg`}>
              <item.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {item.title}
              </p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}