import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, Blocks, Boxes, Component, FileCode, Fingerprint, Gauge, Github, Lock, LucideIcon, Settings, Shapes, Bed, Timer, Footprints, Dumbbell } from "lucide-react";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface BlockCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

function BlockCard({ title, description, icon: Icon, className }: BlockCardProps) {
  return (
    <Card className={`group relative overflow-hidden transition-all hover:shadow-lg ${className}`}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Icon className="h-6 w-6 md:h-8 md:w-8 transition-colors group-hover:text-primary" />
          <div>
            <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
            <CardDescription className="text-xs md:text-sm text-muted-foreground mt-1">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
      </CardContent>
    </Card>
  );
}

function MetricCard({ title, value, icon: Icon, subtitle, color }: { 
  title: string;
  value: string;
  icon: LucideIcon;
  subtitle?: string;
  color?: string;
}) {
  return (
    <Card className={`relative overflow-hidden ${color}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-xl md:text-2xl font-bold">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}

function Dashboard() {
  const blocks = [
    {
      title: "Cards",
      description: "Beautiful card examples for your next application.",
      icon: Component,
    },
    {
      title: "Authentication",
      description: "Authentication forms for your next project.",
      icon: Lock,
    },
    {
      title: "Dashboard",
      description: "Dashboard examples including charts, tables and more.",
      icon: Gauge,
    },
    {
      title: "Forms",
      description: "Different form layouts for your next project.",
      icon: FileCode,
    },
    {
      title: "Music",
      description: "Music app interfaces with beautiful typography.",
      icon: Shapes,
    },
    {
      title: "Payment",
      description: "Payment forms and components for your next project.",
      icon: Fingerprint,
    },
    {
      title: "Settings",
      description: "Different settings layouts for your next project.",
      icon: Settings,
    },
    {
      title: "Tasks",
      description: "Task management layouts for your next project.",
      icon: Boxes,
    },
  ];

  const appointmentData = [
    { name: "10th", video: 30, clinic: 10 },
    { name: "11th", video: 15, clinic: 15 },
    { name: "12th", video: 60, clinic: 20 },
    { name: "13th", video: 50, clinic: 15 },
    { name: "14th", video: 120, clinic: 30 },
    { name: "15th", video: 40, clinic: 10 },
    { name: "16th", video: 70, clinic: 20 },
    { name: "17th", video: 50, clinic: 15 },
  ];

  const departmentData = [
    { name: "Sales", signed: 75, connected: 50, achievers: 20 },
    { name: "Marketing", signed: 80, connected: 45, achievers: 30 },
    { name: "Development", signed: 85, connected: 40, achievers: 25 },
    { name: "Finance", signed: 90, connected: 60, achievers: 45 },
    { name: "HR", signed: 95, connected: 10, achievers: 15 },
  ];

  return (
    <div className="w-full bg-background">
      <div className="space-y-8 px-2 py-8 md:px-4 md:py-16">
        {/* Blocks Section */}
        <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-muted px-3 py-1 text-xs md:text-sm font-medium mb-4">
            <Blocks className="h-3 w-3 md:h-4 md:w-4" />
            <span>Blocks</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            Building blocks for your next project
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-[600px] mb-6 md:mb-8 px-4">
            A collection of application UI blocks built with Radix UI and Tailwind CSS.
            Free and open source.
          </p>
          <div className="flex gap-3 md:gap-4">
            <Button size="sm" className="md:text-base">
              Browse Components
              <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button size="sm" variant="outline" className="md:text-base">
              <Github className="mr-2 h-3 w-3 md:h-4 md:w-4" />
              GitHub
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {blocks.map((block) => (
            <BlockCard
              key={block.title}
              title={block.title}
              description={block.description}
              icon={block.icon}
            />
          ))}
        </div>

        {/* Charts Section */}
        <div className="space-y-4 md:space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-full md:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-0 md:pl-2">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={appointmentData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                    <Bar dataKey="video" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="clinic" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-full md:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Department Stats</CardTitle>
              </CardHeader>
              <CardContent className="pl-0 md:pl-2">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={departmentData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <Line type="monotone" dataKey="signed" stroke="hsl(var(--primary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="connected" stroke="hsl(var(--muted))" strokeWidth={2} />
                    <Line type="monotone" dataKey="achievers" stroke="hsl(var(--accent))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              title="Steps"
              value="10,000"
              icon={Footprints}
              subtitle="500 kcl points"
              color="bg-[#8b5cf6] text-white"
            />
            <MetricCard
              title="Walk"
              value="10min"
              icon={Timer}
              subtitle="200 kcl points"
              color="bg-[#06b6d4] text-white"
            />
            <MetricCard
              title="Exercise"
              value="15min"
              icon={Dumbbell}
              subtitle="1000 kcl points"
              color="bg-[#3b82f6] text-white"
            />
            <MetricCard
              title="Sleep"
              value="8 hrs"
              icon={Bed}
              subtitle="1000 kcl points"
              color="bg-[#f97316] text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
