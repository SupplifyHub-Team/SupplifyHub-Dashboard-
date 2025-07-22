import { Skeleton } from "../ui/skeleton";

export function PricingPlanSkeleton() {
  return (
    <div className="w-full h-full mx-auto">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 h-full min-h-[400px] flex flex-col">
        {/* Plan name skeleton */}
        <Skeleton className="h-7 w-3/4 mx-auto mb-4" />

        {/* Description skeleton */}
        <div className="space-y-2 mb-4 flex-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        {/* Price skeleton */}
        <div className="text-center mb-4">
          <Skeleton className="h-8 w-32 mx-auto" />
        </div>

        {/* Buttons skeleton */}
        <div className="mt-auto flex justify-evenly items-center gap-4">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    </div>
  );
}
export default function PricingPlanSkeletonList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 gap-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <PricingPlanSkeleton key={index} />
      ))}
    </div>
  );
}
