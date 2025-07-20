import useGetAllPlans from "@/hooks/plans/useGetAllPlans";
import PricingPlanCard from "./pricing-plan-card/PricingPlanCard";

export default function PricingPlansList() {
  const { data } = useGetAllPlans();
  console.log(data);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">لا توجد خطط متاحة حاليا</p>
      </div>
    );
  }

  console.log(data);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 gap-6">
      {data?.data.map((plan) => (
        <PricingPlanCard key={plan.id} plan={plan} />
      ))}
      <PricingPlanCard
        plan={
          {
            id: 0,
            createdAt: "",
            updatedAt: "",
            planName: "خطة تجريبية",
            price: 0,
            description: "وصف الخطة التجريبية",
            duration: 30,
          } as IPlan
        }
      />
    </ul>
  );
}
