import { AddCategorySchema } from "@/schemas/categorySchema";
import { create } from "zustand";
import { persist } from "zustand/middleware";
type PersistedCategoryFormDataType = {
  categoryName?: string;
};

interface CategoryFormState {
  formData: PersistedCategoryFormDataType | null;
}

interface CategoryFormActions {
  setFormData: (data: Partial<AddCategorySchema>) => void;
  clearData: () => void;
}

export const useCategoryForm = create<
  CategoryFormState & CategoryFormActions
>()(
  persist(
    (set) => ({
      formData: null,
      setFormData: (data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            categoryName: data.categoryName,
          },
        })),
      clearData: () => set({ formData: null }),
    }),
    {
      name: "category-form-storage",
    }
  )
);

export default useCategoryForm;
