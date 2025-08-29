import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitleWithCancel,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import EditCategoryForm from "../forms/EditCategoryForm";
import AddCategoryForm from "../forms/AddCategoryForm";

import { Dispatch, SetStateAction } from "react";

interface AddCategoriesProps {
  editingCategory: IActiveCategory | null;
  setEditingCategory: Dispatch<SetStateAction<IActiveCategory | null>>;
}

export default function AddCategories({
  editingCategory,
  setEditingCategory,
}: AddCategoriesProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    if (editingCategory) {
      setIsEditDialogOpen(true);
    } else {
      setIsEditDialogOpen(false);
    }
  }, [editingCategory]);

  const handleCloseAddDialog = () => {
    setIsAddDialogOpen(false);
  };

  const handleCloseEditDialog = () => {
    setEditingCategory(null);
  };

  return (
    <div className="flex gap-4">
      {/* Add Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default" className="text-white border-primary">
            اضافة فئة جديدة
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] p-6">
          <DialogHeader>
            <DialogTitleWithCancel
              title="إضافة فئة جديدة"
              className="text-white"
              onCancel={handleCloseAddDialog}
            />
          </DialogHeader>
          <div>
            <AddCategoryForm onCloseDialog={handleCloseAddDialog} />
          </div>
        </DialogContent>
      </Dialog>

      {editingCategory && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px] md:max-w-[600px] p-6">
            <DialogHeader>
              <DialogTitleWithCancel
                title="تعديل الفئة"
                className="text-white"
                onCancel={handleCloseEditDialog}
              />
            </DialogHeader>
            <div>
              <EditCategoryForm
                onCloseDialog={handleCloseEditDialog}
                defaultValues={{
                  id: editingCategory.categoryId,
                  categoryName: editingCategory.categoryName,
                }}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
