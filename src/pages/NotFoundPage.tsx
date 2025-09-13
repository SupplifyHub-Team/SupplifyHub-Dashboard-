import { Button } from "@/components/ui/button";
import { Home, ArrowRight, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* 404 Number with glow effect */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400  to-indigo-400 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-purple-500/20 blur-sm leading-none select-none">
            404
          </div>
        </div>

        {/* Alert icon with animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <AlertTriangle className="w-16 h-16 text-amber-400 animate-bounce" />
            <div className="absolute inset-0 w-16 h-16 text-amber-400/30 blur-sm animate-ping"></div>
          </div>
        </div>

        {/* Arabic text content */}
        <div className="space-y-6 mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            dir="rtl">
            عذراً، الصفحة غير موجودة
          </h2>
          <p
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            dir="rtl">
            يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو أنك قمت بإدخال
            رابط خاطئ
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleGoHome}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            dir="rtl">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Home className="w-5 h-5 ml-2" />
            العودة للرئيسية
          </Button>

          <Button
            onClick={handleGoBack}
            variant="outline"
            className="group border-2  hover:text-white hover:bg-purple-500/20 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            dir="rtl">
            <ArrowRight className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform duration-300" />
            الصفحة السابقة
          </Button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}></div>
        ))}
      </div>
    </div>
  );
}
