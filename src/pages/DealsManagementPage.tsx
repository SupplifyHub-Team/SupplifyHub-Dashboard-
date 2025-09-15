"use client";

import useGetDealsConfirm from "@/hooks/deals/useGetDealsConfirm";
import { Button } from "@/components/ui/button";
import DealCard from "@/components/deals/DealCard";
import EmptyDealsState from "@/components/deals/EmptyDealsState";
import { Skeleton } from "@/components/ui/skeleton";

export default function DealsManagementPage() {
  const { data, isLoading, isError, refetch } = useGetDealsConfirm();


  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center space-y-4">
        <p className="text-red-400 font-semibold">
          حدث خطأ أثناء تحميل البيانات
        </p>
        <Button onClick={() => refetch()}>إعادة المحاولة</Button>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 space-y-6" dir="rtl">
      {data?.length ? (
        data?.map((deal) => <DealCard key={deal.dealId} deal={deal} />)
      ) : (
        <EmptyDealsState onReset={refetch} />
      )}
    </div>
  );
}
