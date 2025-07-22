import { create } from "zustand";
import { persist } from "zustand/middleware";
import { categorySchema as CategoryFormDataType  } from "@/schemas/categorySchema";
interface CategoryFormState {
  formData: CategoryFormDataType | null;
}

interface CategoryFormActions {
  setFormData: (data: CategoryFormDataType) => void;
  clearData: () => void;
}

export const useCategoryForm = create<
  CategoryFormState & CategoryFormActions
>()(
  persist(
    (set) => ({
      formData: null,
      setFormData: (data) => set({ formData: data }),
      clearData: () => set({ formData: null }),
    }),
    {
      name: "category-form-storage",
    }
  )
);

export default useCategoryForm;
