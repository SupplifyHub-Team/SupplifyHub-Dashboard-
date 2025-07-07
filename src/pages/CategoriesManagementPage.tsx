import ActiveCatTable from "@/components/tables/category-table/active-cat-table/ActiveCatTable";
import PendingCatTable from "@/components/tables/category-table/pending-cat-table/PendingCatTable";
import Box from "@/components/ui/box";

const CategoriesManagementPage = () => {
  return (
    <Box className="w-full flex flex-col gap-6 md:gap-15 ">
      <ActiveCatTable />

      <PendingCatTable />
    </Box>
  );
};

export default CategoriesManagementPage;
