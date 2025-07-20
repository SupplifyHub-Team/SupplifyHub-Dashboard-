import ConfirmDeletion from "@/components/ConfirmDeletion";
import { Button } from "@/components/ui/button";
import useDeletePlan from "@/hooks/plans/useDeletePlan";
import { CircleCheck, CircleX } from "lucide-react";

export default function PricingPlanDisplay({
  plan,
  setIsEditing,
}: {
  plan: IPlan;
  setIsEditing: (editing: boolean) => void;
}) {
  const { mutate } = useDeletePlan();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl text-gray-800 font-bold  text-center">
        {plan.planName}
      </h2>
      <p className="text-lg text-gray-800  ">{plan.description}</p>
      <p className="text-xl font-semibold text-center">
        <span className="text-indigo-500">${plan.price}</span> /{plan.duration}{" "}
        {"شهر "}
      </p>
      {plan?.pros && (
        <>
          <div className="flex items-center">
            <span className=" px-3 font-medium text-indigo-600  bg-white left-1/2 dark:text-white dark:bg-gray-900">
              المميزات
            </span>
            <hr className="w-full h-0.5  bg-indigo-200 border-0 dark:bg-gray-700" />
          </div>
          <ul className=" pl-5 flex flex-col gap-3">
            {plan?.pros &&
              plan.pros.map((pro, index) => (
                <li
                  key={index}
                  className="text-gray-700 flex  gap-2 font-semibold">
                  <CircleCheck className="inline mr-2 text-indigo-500" />
                  <span className="text-indigo-700">{pro}</span>
                </li>
              ))}
          </ul>
        </>
      )}
      {plan?.cons && (
        <>
          <div className="flex items-center">
            <span className=" px-3 font-medium text-red-600  bg-white left-1/2 dark:text-white dark:bg-gray-900">
              العيوب
            </span>
            <hr className="w-full h-0.5  bg-red-200 border-0 dark:bg-gray-700" />
          </div>
          <ul className="pl-5 flex flex-col gap-3">
            {plan?.cons &&
              plan.cons.map((con, index) => (
                <li
                  key={index}
                  className="text-gray-700 flex  gap-2 font-semibold">
                  <CircleX className="inline mr-2 text-red-500" />
                  <span className="text-red-700">{con}</span>
                </li>
              ))}
          </ul>
        </>
      )}

      {/* access buttons */}
      <div className="grid grid-cols-2 items-center gap-4">
        {/* edit button */}
        <Button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
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
