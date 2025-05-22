import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Error404Content() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh] text-center">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8 self-start">
        <span className="hover:text-primary cursor-pointer">Home</span> / <span>404 Error</span>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold">Not Found</h2>
        <p className="text-gray-600">
          Your visited page not found. You may go home page.
        </p>
        <Button className="mt-6 px-8 py-4">
          Back to home page
        </Button>
      </div>

      {/* Search Suggestion (optional) */}
      <div className="mt-16 w-full max-w-lg">
        <h3 className="text-lg font-medium mb-4">What are you looking for?</h3>
        <div className="flex gap-2">
          <Input 
            type="search" 
            placeholder="Search products..." 
            className="flex-1"
          />
          <Button variant="outline">Search</Button>
        </div>
      </div>
    </div>
  );
}