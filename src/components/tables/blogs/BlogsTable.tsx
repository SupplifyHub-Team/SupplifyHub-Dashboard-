import { AlertCircle } from "lucide-react";
import useGetBlogs from "@/hooks/blogs/useGetBlogs";
import ReusableTable from "../ReusableTable";
import BlogsTableRow from "./BlogsTableRow";
import AddBlog from "./AddBlog";

const TABLE_HEADERS: string[] = [
  "العنوان",
  "المختصر",
  "الصورة",
  "تاريخ الإنشاء",
  "الإجراءات",
];

export default function BlogsTable() {
  const { data, isPending } = useGetBlogs();

  const blogs = data?.data || [];
  const totalPages = data?.meta?.totalPages || 0;
  const totalItems = data?.meta?.totalItems || 0;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-white text-right md:text-2xl ">
        ادارة المدونات
      </h2>
      <div className="flex gap-2  items-center justify-between my-2 ">
        <AddBlog />
      </div>

      {!isPending && blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 gap-2">
          <AlertCircle className="w-8 h-8 text-red-400" />
          لا توجد بيانات لعرضها
        </div>
      ) : (
        <ReusableTable
          headers={TABLE_HEADERS}
          paginationProps={{
            totalItems,
            name: "blogs",
            totalPages,
          }}
          data={blogs}
          isPending={isPending}
          renderRow={(blog) => <BlogsTableRow blog={blog} />}
        />
      )}
    </div>
  );
}
