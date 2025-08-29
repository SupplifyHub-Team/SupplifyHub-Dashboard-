import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-card-50 to-background-200 flex items-center justify-center">
      <div className="text-center">
        {/* Main loading animation */}
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-gray-200 border-t-primary rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        </div>

        {/* Brand/Logo area */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-200 mb-2">
            لوحة التحكم الإدارية
          </h1>
          <p className="text-white">جاري تحميل التطبيق...</p>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center gap-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        {/* Optional progress bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-primary h-1 rounded-full animate-pulse"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
