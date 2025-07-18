import SubscribedTable from "@/components/tables/subscribed-suppliers-table/SubscribedTable";
import { StatCard } from "@/components/cards/StatCard";
import { Landmark } from "lucide-react";
import PricingPlansList from "@/components/pricing-plan/PricingPlansList";

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

      <PricingPlansList />

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 gap-2 ">
        <PricingPlanCard
          title="الخطة المجانية"
          price="0"
          duration="شهريًا"
          advantages={["مساحة عمل واحدة", "دعم عبر البريد الإلكتروني"]}
          disadvantages={["لا يوجد دعم أولوية", "الوصول إلى مركز المساعدة فقط"]}
        />

        <PricingPlanCard
          title="الخطة المهنية"
          price="10"
          duration="شهريًا"
          advantages={["حتى 5 مساحات عمل", "دعم أولوية"]}
          disadvantages={["تكاملات محدودة", "لا توجد علامة تجارية مخصصة"]}
        />

        <PricingPlanCard
          title="الخطة المميزة"
          price="20"
          duration="كل 3 أشهر"
          advantages={["مساحات عمل غير محدودة", "دعم على مدار 24/7"]}
          disadvantages={["لا توجد نطاقات مخصصة", "وصول محدود لواجهة API"]}
        />
      </div> */}

      <SubscribedTable />
    </div>
  );
};

export default PricingPlanPage;
