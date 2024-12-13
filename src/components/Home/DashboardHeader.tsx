export function DashboardHeader() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl md:text-3xl font-medium tracking-tight dark:text-white">
        Welcome back, Admin!
      </h1>
      <p className="text-sm text-muted-foreground dark:text-white">
        Here is a summary of your health journey with us so far
      </p>
    </div>
  );
}
