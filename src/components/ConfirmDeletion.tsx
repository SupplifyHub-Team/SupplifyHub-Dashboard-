import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
export default function ConfirmDeletion({
  onApprove,
  label,
}: {
  onApprove: () => void;
  label?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">{label || "حذف"}</Button>
      </DialogTrigger>
      <DialogContent className="text-center">
        <DialogHeader>
          <DialogTitle>هل انت متاكد من حذف هذا العنصر؟</DialogTitle>
          <DialogDescription>
            هذا الإجراء لا يمكن التراجع عنه. يرجى التأكد من أنك تريد حذف هذا
            العنصر قبل المتابعة.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-center mx-auto">
          <DialogClose asChild>
            <Button variant="outline">إلغاء</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={onApprove} type="button" variant="destructive">
              حذف
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
