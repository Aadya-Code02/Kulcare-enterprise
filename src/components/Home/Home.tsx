import { DashboardHeader } from "./DashboardHeader";
import { ProviderCoverage } from "./ProviderCoverage";
import { ProviderSuggestions } from "./ProviderSuggestions";
import { EmployeeMood } from "./EmployeeMood";
import { EmployeeAnxiety } from "./EmployeeAnxiety";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <div className="max-w-[1280px] border">
      <div className="space-y-4">
        <div className="block justify-start space-y-4 p-4 md:p-8 pt-6 ">
          <DashboardHeader />
        </div>

          <h2 className="block">Provider Coverage</h2>
          <div className="grid grid-cols-1">
          <ProviderCoverage />
          </div>

      <div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">PROVIDER SUGGESTIONS</h2>
            <ProviderSuggestions />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h2 className="text-lg  font-semibold">EMPLOYEE MOOD LEVELS</h2>
            <EmployeeMood />
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">EMPLOYEE ANXIETY LEVELS</h2>
            <EmployeeAnxiety />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">EMPLOYEE OVERVIEW</h2>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
