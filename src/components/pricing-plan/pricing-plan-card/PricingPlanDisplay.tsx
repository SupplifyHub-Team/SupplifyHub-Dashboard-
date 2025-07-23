import { CircleCheck, CircleX } from "lucide-react";
import ConfirmDeletion from "@/components/ConfirmDeletion";
import { Button } from "@/components/ui/button";
import useDeletePlan from "@/hooks/plans/useDeletePlan";

export default function PricingPlanDisplay({
  plan,
  setIsEditing,
}: {
  plan: IPlan;
  setIsEditing: (editing: boolean) => void;
}) {
  const { mutate } = useDeletePlan();

  const hasPros = Array.isArray(plan.pros) && plan.pros.length > 0;
  const hasCons = Array.isArray(plan.cons) && plan.cons.length > 0;

  return (
    <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6 w-full flex flex-col justify-between">
      {/* عنوان الخطة */}
      <div className="flex flex-col items-center border-b border-gray-300 pb-6">
        <span className="mb-2 text-gray-800 text-lg font-semibold">
          {plan.planName}
        </span>
        <span className="mb-2 text-3xl font-bold text-indigo-600">
          $ {plan.price} /{" "}
          <span className="text-gray-500 text-sm">
            {plan.duration + " شهر"}
          </span>
        </span>

        {plan.description && (
          <span className="mt-3 text-sm text-gray-400">{plan.description}</span>
        )}
      </div>

      {hasPros && (
        <>
          <div className="mt-6 mb-2 font-semibold text-indigo-600"></div>
          <ul className="space-y-3">
            {plan.pros!.map((pro, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-sm text-gray-600"
              >
                <span className="grid  place-content-center rounded-full bg-indigo-500 text-white">
                  <CircleCheck className="inline  text-white" />
                </span>
                {pro}
              </li>
            ))}
          </ul>
        </>
      )}

      {hasCons && (
        <>
          <div className="mt-2 mb-2 font-semibold text-red-600"></div>
          <ul className="space-y-3">
            {plan.cons!.map((con, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-sm text-gray-600"
              >
              <span className="grid place-content-center rounded-full bg-gray-500 text-white">
                  <CircleX className="inline text-white " />
                </span>
                {con}
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4">
        <Button
          onClick={() => setIsEditing(true)}
          className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        >
          تعديل الخطة
        </Button>

        <ConfirmDeletion
          label="حذف الخطة"
          onApprove={() => mutate(plan.id.toString())}
        />
      </div>
    </div>
  );
}
