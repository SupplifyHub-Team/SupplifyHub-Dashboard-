import { AreYouSureDeleteing } from "@/components/AreYouSureDeleteing";
import { Button } from "@/components/ui/button";
import useDeleteBlog from "@/hooks/blogs/useDeleteBlog";
import { Trash2 } from "lucide-react";

export default function DeleteBlog({ id }: { id: string | number }) {
  const { mutate: deleteBlog } = useDeleteBlog();

  return (
    <AreYouSureDeleteing
      TriggerButton={
        <Button variant="destructive">
          <Trash2 />
        </Button>
      }
      
      description="هل أنت متأكد أنك تريد حذف هذه المدونة؟ هذا الإجراء لا يمكن التراجع عنه."
      onAccept={() => deleteBlog({ id })}
    />
  );
}
