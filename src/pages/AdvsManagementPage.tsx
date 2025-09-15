import AdditionalAdvsTable from "@/components/tables/additional-tables/additional-advs/AdditionalAdvsTable";
import ActiveAdvsTable from "@/components/tables/advs-tables/active-advs/ActiveAdvsTable";
import PendingAdvsTable from "@/components/tables/advs-tables/pending-advs/PendingAdvsTable";
import Box from "@/components/ui/box";

export default function AdvsManagementPage() {
  return (
    <Box className="w-full flex flex-col  md:gap-15 ">
      <ActiveAdvsTable />
      <PendingAdvsTable />
      <AdditionalAdvsTable />
    </Box>
  );
}
