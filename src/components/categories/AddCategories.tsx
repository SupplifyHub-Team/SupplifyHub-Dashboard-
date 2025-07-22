import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitleWithCancel,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddCategoryForm from "../forms/AddCategoryForm";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function AddCategories() {
  const [open, setOpen] = useState(false);

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center  justify-between w-full mt-2.5  md:gap-1.5 cursor-pointer  px-4 py-2 text-sm md:text-md md:w-auto rounded-full  bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
          اضافة فئة جديدة
          <Plus color="#ffffff" className="md:w-6 md:h-6 w-4 h-4 " />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] p-6 ">
        <DialogHeader>
          <DialogTitleWithCancel title="إضافة فئة جديد" icon={<Plus />} />
        </DialogHeader>
        <div>
          <AddCategoryForm onCloseDialog={handleCloseDialog} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
