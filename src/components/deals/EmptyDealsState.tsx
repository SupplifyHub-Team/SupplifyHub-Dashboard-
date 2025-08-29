import { Button } from "@/components/ui/button";
import { FileSearch } from "lucide-react";

export default function EmptyDealsState({ onReset }: { onReset?: () => void }) {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 animate-bounce bg-[var(--color-popover)] rounded-full flex items-center justify-center mx-auto mb-6 border border-[var(--color-border)]">
        <FileSearch className="w-12 h-12 text-muted-foreground" />
      </div>
      <h3 className="text-xl text-white font-semibold mb-2">لا توجد صفقات حالياً</h3>
      <p className="text-muted-foreground mb-6">عند وصول صفقات جديدة ستظهر هنا.</p>
      {onReset ? (
        <Button variant="outline" onClick={onReset}>
          إعادة التحميل
        </Button>
      ) : null}
    </div>
  );
}
