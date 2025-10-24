import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[--primary] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-[--foreground] mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-[--muted-foreground] mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
