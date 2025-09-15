import { AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";

interface FormErrorBoxProps {
  errors: string[];
  className?: string;
}

export default function FormErrorBox({ errors, className }: FormErrorBoxProps) {
  const form = useFormContext();

  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "bg-red-50 border border-red-200 rounded-lg p-4 mb-6 relative",
        "dark:bg-red-950/50 dark:border-red-800/50",
        className
      )}>
      <Button
        type="button"
         variant="ghost"
        onClick={() => form.clearErrors()}
        className="absolute top-3 left-3 text-red-500 hover:bg-red-300 hover:text-red-700 transition-colors"
        aria-label="إغلاق">
        <X className="w-4 h-4" />
      </Button>

      <div className="flex items-start gap-3" dir="rtl">
        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="text-red-800 dark:text-red-200 font-semibold mb-2">
            يرجى تصحيح الأخطاء التالية:
          </h4>
          <ul className="space-y-1">
            {errors.map((error, index) => (
              <li
                key={index}
                className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                • {error}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
