import { Skeleton } from "../ui/skeleton";

export function StatCardSkeleton() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
      <Skeleton className="h-8 w-16 mb-2" />
      <Skeleton className="h-4 w-32" />
    </div>
  );
}
export default function StatCardSkeletons() {
  return Array.from({ length: 3 }, (_, index) => (
    <StatCardSkeleton key={index} />
  ));
}
