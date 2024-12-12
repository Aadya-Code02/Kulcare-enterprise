import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Home, RefreshCcw } from "lucide-react";

interface ErrorPageProps {
  code?: number;
  title?: string;
  description?: string;
  showHomeButton?: boolean;
  showRetryButton?: boolean;
  showBackButton?: boolean;
  onRetry?: () => void;
}

export function ErrorPage({
  code = 404,
  title = "Page not found",
  description = "Sorry, we couldn't find the page you're looking for.",
  showHomeButton = true,
  showRetryButton = true,
  showBackButton = true,
  onRetry,
}: ErrorPageProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader className="text-center pb-2">
          <div className="w-full flex justify-center mb-6">
            <div className="rounded-full bg-destructive/10 p-4">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold mb-2">{code}</CardTitle>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-muted-foreground">
          <p>{description}</p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-center">
          {showBackButton && (
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          )}
          {showHomeButton && (
            <Button
              variant="secondary"
              onClick={() => (window.location.href = "/")}
              className="w-full sm:w-auto"
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          )}
          {showRetryButton && (
            <Button onClick={onRetry} className="w-full sm:w-auto">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
