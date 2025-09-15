import { Skeleton } from "@/components/ui/skeleton";

export default function PricingPlanStatSkeleton() {
  return Array.from({ length: 6 }).map((_, index) => (
    <div key={index} className="bg-card rounded-lg border p-6">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
      {/* <Skeleton className="h-8 w-16 mb-2" />
      <Skeleton className="h-4 w-32" /> */}
    </div>
  ));
}
