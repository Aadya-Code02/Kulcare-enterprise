export function DashboardHeader() {
    return (
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Admin!</h1>
        <p className="text-sm text-blue-600 bg-blue-100 inline-block px-2 py-1 rounded">
          Here is a summary of your health journey with us so far
        </p>
      </div>
    );
  }