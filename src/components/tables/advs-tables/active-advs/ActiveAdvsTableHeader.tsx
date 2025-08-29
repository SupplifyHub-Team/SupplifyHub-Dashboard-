import AddEvent from "@/components/advs/AddEvent";
import ActiveAdvsFilters from "./ActiveAdvsFilters";

export default function ActiveAdvsTableHeader() {
  return (
    <div>
      <div className="flex  gap-2 mb-4 justify-between items-baseline ">
        <h2 className="text-lg mb-4 font-semibold text-white text-right md:text-2xl ">
          الاعلانات النشطة
        </h2>
        <AddEvent />
      </div>
      <ActiveAdvsFilters />
    </div>
  );
}
