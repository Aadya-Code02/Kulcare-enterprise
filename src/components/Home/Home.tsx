import { DashboardHeader } from "./DashboardHeader";
import { ProviderCoverage } from "./ProviderCoverage";
import { ProviderSuggestions } from "./ProviderSuggestions";
import { EmployeeMood } from "./EmployeeMood";
import { EmployeeAnxiety } from "./EmployeeAnxiety";

export default function Home() {
  return (
    <div className="flex h-auto min-w-[1200px] flex-col">
      <div className="flex-1 space-y-8 p-8 pt-6">
        <DashboardHeader />
        
        <div className="space-y-10">
          <div className="flex justify-between space-x-8">
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4">PROVIDER COVERAGE</h2>
              <ProviderCoverage />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4">PROVIDER SUGGESTIONS</h2>
              <ProviderSuggestions />
            </div>
          </div>

          <div className="flex justify-between space-x-8">
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4">EMPLOYEE MOOD LEVELS</h2>
              <EmployeeMood />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4">EMPLOYEE ANXIETY LEVELS</h2>
              <EmployeeAnxiety />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}