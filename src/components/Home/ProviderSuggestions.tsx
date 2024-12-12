import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const suggestions = [
  {
    title: "Cardiologist in Dwarka, Delhi",
    employees: "37 employees",
  },
  {
    title: "Cardiologist in Dwarka, Delhi",
    employees: "37 employees",
  },
];

export function ProviderSuggestions() {
  return (
    <div className="space-y-4">
      {suggestions.map((suggestion, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{suggestion.title}</h3>
              <p className="text-sm text-muted-foreground">
                {suggestion.employees}
              </p>
            </div>
            <Button variant="ghost" className="text-blue-600">
              Search
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}