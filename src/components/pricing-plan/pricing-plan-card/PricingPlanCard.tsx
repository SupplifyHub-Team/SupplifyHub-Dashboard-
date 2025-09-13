import { useState } from "react";
import PricingPlanDisplay from "./PricingPlanDisplay";
import PricingPlanForm from "./PricingPlanForm";

export default function PricingPlanCard({ plan }: { plan: IPlan }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      <div
        onDoubleClick={() => setIsEditing(!isEditing)}
        className="rounded-2xl   bg-gradient-to-br from-background   w-full flex flex-col justify-between ">
        {isEditing ? (
          <PricingPlanForm setIsEditing={setIsEditing} plan={plan} />
        ) : (
          <PricingPlanDisplay setIsEditing={setIsEditing} plan={plan} />
        )}
      </div>
    </div>
  );
}
