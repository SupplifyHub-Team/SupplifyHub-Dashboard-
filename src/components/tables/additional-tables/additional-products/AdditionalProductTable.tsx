import useGetProducts from "@/hooks/products/useGetProducts";
import ReusableTable from "../../ReusableTable";
import { PRODUCTS_TABLE_NAME } from "@/lib/constants";
import AdditionalProductTableRow from "./AdditionalProductTableRow";
import { AlertCircle } from "lucide-react";

const TABLE_HEADERS: string[] = [
  "اسم المورد",
  "البريد الإلكتروني",
  "رقم التلفون ",
  "الكمية المطلوبة",
  "الإجراءات",
];

export default function AdditionalProductTable() {
  const { data, isPending } = useGetProducts();

  const hasData = (data?.data?.length ?? 0) > 0;

  return (
    <div className="flex flex-col gap-4 bg-bakground  rounded-2xl shadow-md ">
      {!hasData && !isPending ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-2">
          <AlertCircle className="w-8 h-8 text-gray-400" />
          <p className="text-sm">لا توجد طلبات منتجات حالياً</p>
        </div>
      ) : (
        <ReusableTable
          headers={TABLE_HEADERS}
          paginationProps={{
            totalItems: data?.meta?.totalItems || 0,
            name: PRODUCTS_TABLE_NAME,
            totalPages: data?.meta?.totalPages || 0,
          }}
          data={data?.data || []}
          isPending={isPending}
          renderRow={(product) => (
            <AdditionalProductTableRow
              product={product}
              key={product.requestId}
            />
          )}
          height={37}
        />
      )}
    </div>
  );
}
