import { ResponsiveModal } from "@/components/ResponsiveModal";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import EditBlogForm from "./EditBlogForm";

export default function EditBlog({ blog }: { blog: IBlogCard }) {
  return (
    <ResponsiveModal
      title="تعديل المدونة"
      trigger={
        <Button variant="default">
          <Pen />
        </Button>
      }
      maxWidth="2xl"
      height="90vh">
      <EditBlogForm blog={blog} />
    </ResponsiveModal>
  );
}
