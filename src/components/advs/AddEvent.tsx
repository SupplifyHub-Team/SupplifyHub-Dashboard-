
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import { Button } from "../ui/button";
import AddSEventForm from "../forms/AddSEventForm";

export default function AddEvent() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-5 rounded-xl">
          <span> اضافة حدث </span>
          <Calendar className="text-white! font-bold h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[95%] max-w-[1000px] md:w-[80%] lg:w-[70%]">
        <DialogHeader>
          <DialogTitleWithCancel
            className="text-white"
            title="إضافة حدث"
            icon={<Calendar size={16} className="text-white! h-4 w-4" />}
          />
        </DialogHeader>

        <div className="p-5 pt-3">
          <AddSEventForm
            onCloseDialog={() => {
              setOpen(false);
            }}
          />
        </div>

        <DialogDescription className="sr-only">
          هذه الحوار مخصص لإضافة حدث جديد إلى النظام. يمكنك ملء النموذج
          بالمعلومات المرغوب فيها مثل الاسم، صورة الإعلان وتاريخ نهايته. بعد
          الانتهاء، اضغط على زر "إضافة" لحفظ الحدث الجديد.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
