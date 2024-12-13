import { Card } from "../ui/card";

const anxietyLevels = [
  {
    percentage: "87%",
    level: "Low or Mild",
    score: "Score: 7",
    color: "text-emerald-500",
  },
  {
    percentage: "11%",
    level: "Moderate",
    score: "Score: 10",
    color: "text-yellow-500",
  },
  {
    percentage: "2%",
    level: "Severe",
    score: "Score: 150",
    color: "text-red-500",
  },
];

export function EmployeeAnxiety() {
  return (
    <div className="space-y-3 md:space-y-4">
      {anxietyLevels.map((level) => (
        <Card key={level.level} className="p-3 md:p-4 w-[362px] h-[119px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <span className={`text-xl md:text-2xl font-bold ${level.color}`}>
                {level.percentage}
              </span>
              <span className={`text-base md:text-lg ${level.color}`}>{level.level}</span>
            </div>
            <span className="text-xs md:text-sm text-muted-foreground">{level.score}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
