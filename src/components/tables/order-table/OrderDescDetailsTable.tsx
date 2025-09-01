import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";



interface OrderDescDetailsTableProps {
  products?: IOrderProduct[];
}

export default function OrderDescDetailsTable({ products = [] }: OrderDescDetailsTableProps) {
  if (products.length === 0) {
    return <div className="text-center text-gray-500">لا توجد تفاصيل للطلب</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-gray-800 text-center">تفاصيل الطلب</h2>
      <Card className="p-4 shadow-md border rounded-2xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">اسم المنتج</TableHead>
              <TableHead className="text-right">الكمية المطلوبة</TableHead>
              <TableHead className="text-right">ملاحظات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.productName}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  {item.notes ? (
                    <span className="whitespace-pre-wrap">{item.notes}</span>
                  ) : (
                    <span className="text-gray-400">لا يوجد</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
