import SubscribedTable from "@/components/tables/subscribed-suppliers-table/SubscribedTable";
import { StatCard } from "@/components/cards/StatCard";
import { Landmark } from "lucide-react";
import PricingPlanCard from "@/components/pricing-plan/PricingPlanCard";

const PricingPlanPage = () => {
  return (
    <div className="flex flex-col gap-1 ">


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-2 gap-6">
        <StatCard
          title=" الخطه المجانيه"
          value={128}
          change="+8 هذا الشهر"
          changeDirection="up"
          color="blue"
          icon={<Landmark color="#212bb5" className="w-6 h-6 cursor-pointer" />}
        />

        <StatCard
          title=" الخطة المهنية"
          value={218}
          change="+8 هذا الشهر"
          changeDirection="up"
          color="green"
          icon={<Landmark color="#02f71f" className="w-6 h-6 cursor-pointer" />}
        />

        <StatCard
          title="الخطة المميزة"
          value={298}
          change="+8 هذا الشهر"
          changeDirection="up"
          color="purple"
          icon={<Landmark color="#f7021b" className="w-6 h-6 cursor-pointer" />}
        />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 gap-2 ">
        <PricingPlanCard
          title="الخطة المجانية"
          price="0"
          duration="شهر"
          advantages={["One workspace", "Email support"]}
          disadvantages={["No priority support", "Help center access"]}
        />

        <PricingPlanCard
          title="الخطة المهنية"
          price="10"
          duration="شهر"
          advantages={["Up to 5 workspaces", "Priority support"]}
          disadvantages={["Limited integrations", "No custom branding"]}
        />

        <PricingPlanCard
          title="الخطة المميزة"
          price="20"
          duration="3 شهر"
          advantages={["Unlimited workspaces", "24/7 support"]}
          disadvantages={["No custom domains", "Limited API access"]}
        />
      </div>

    

      <SubscribedTable />
    </div>
  );
};

export default PricingPlanPage;
