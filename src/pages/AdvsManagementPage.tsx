import ActiveAdvsTable from "@/components/tables/advs-tables/active-advs/ActiveAdvsTavble";
import PendingAdvsTable from "@/components/tables/advs-tables/pending-advs/PendingAdvsTable";
import Box from "@/components/ui/box";

export default function AdvsManagementPage() {
  return (
    <Box className="w-full flex flex-col gap-6 md:gap-15 ">
      <ActiveAdvsTable />
      <PendingAdvsTable />
    </Box>
  );
}
