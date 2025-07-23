import { Skeleton } from "../ui/skeleton";

const PricingPlanCardSkeleton = () => (
  <div className="w-full h-full mx-auto">
    <div className="rounded-2xl border border-gray-200 bg-white p-6 h-full min-h-[500px] flex flex-col">
      {/* Plan name skeleton */}
      <div className="flex flex-col items-center border-b border-gray-300 pb-6">
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-8 w-40 mb-2" />
        <Skeleton className="h-4 w-48 mt-3" />
      </div>

      {/* Pros/cons list skeleton */}
      <div className="flex-1 mt-6">
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="h-4 flex-1" />
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="h-4 flex-1" />
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons skeleton */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  </div>
);

export default function PricingPlanSkeletonList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <li key={index}>
          <PricingPlanCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
