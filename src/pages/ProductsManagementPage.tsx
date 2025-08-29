import ActiveProductTable from "@/components/tables/additional-tables/additional-products/AdditionalProductTable";
import Box from "@/components/ui/box";

export default function ProductsManagementPage() {
  return (
    <Box className="w-full flex flex-col  md:gap-10">
      {/* Page header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-white">
          إدارة طلبات المنتجات
        </h2>
        <p className="text-white/85 mb-4 text-sm">
           يمكنك مراجعة الطلبات الإضافية المقدمة من الموردين والموافقة أو
          الرفض عليها.
        </p>
      </div>

      {/* Products table */}
      <ActiveProductTable />
    </Box>
  );
}
