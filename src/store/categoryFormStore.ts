import { create } from "zustand";
import { persist } from "zustand/middleware";
import { categorySchema } from "@/schemas/categorySchema";
type PersistedCategoryFormDataType = {
  categoryName?: string;
};

interface CategoryFormState {
  formData: PersistedCategoryFormDataType | null;
}

interface CategoryFormActions {
  setFormData: (data: Partial<categorySchema>) => void;
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
