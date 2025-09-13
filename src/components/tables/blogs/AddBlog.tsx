import CreateBlogForm from "@/components/forms/blogs/CreateBlogForm";
import { ResponsiveModal } from "@/components/ResponsiveModal";
import { Button } from "@/components/ui/button";

export default function AddBlog() {
  return (
    <ResponsiveModal
      title="إضافة مدونة جديدة"
      trigger={<Button variant="default">إضافة مدونة</Button>}
      maxWidth="2xl"
      height="90vh">
      <CreateBlogForm />
    </ResponsiveModal>
  );
}
