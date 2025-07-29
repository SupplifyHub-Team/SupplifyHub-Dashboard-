// src/store/categoryFormStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { categorySchema } from "@/schemas/categorySchema"; // استيراد الـ schema الأصلي

// ⬅️ الحل: تعريف نوع البيانات التي سيتم الاحتفاظ بها فعلياً
// لا نريد تخزين كائن File الفعلي.
// إذا كنت تحتاج معاينة بعد التحديث، يمكنك تخزين URL مؤقت كـ string بدلاً من ذلك.
type PersistedCategoryFormDataType = {
  categoryName?: string;
  // categoryImage: لا يتم تضمينه هنا لأنه File (غير قابل للتسلسل بسهولة)
};

interface CategoryFormState {
  formData: PersistedCategoryFormDataType | null;
}

interface CategoryFormActions {
  // ⬅️ الحل: يجب أن تقبل setFormData نوع Partial من الـ schema الأصلي
  // للسماح بتعيين أجزاء فقط (مثل الاسم) بدون الملف.
  setFormData: (data: Partial<categorySchema>) => void; // لاحظ استخدام Partial
  clearData: () => void;
}

export const useCategoryForm = create<
  CategoryFormState & CategoryFormActions
>()(
  persist(
    (set) => ({
      formData: null, // القيمة الأولية للمخزن
      setFormData: (data) =>
        set((state) => ({
          formData: {
            ...state.formData, // احتفظ بالبيانات الموجودة
            categoryName: data.categoryName, // فقط قم بتحديث categoryName
            // لا تحاول تخزين data.categoryImage هنا
          },
        })),
      clearData: () => set({ formData: null }),
    }),
    {
      name: "category-form-storage",
      // ⬅️ إذا كنت تحتاج التحكم الدقيق في ما يتم تخزينه، يمكنك استخدام partialize:
      // partialize: (state) => ({
      //   formData: {
      //     categoryName: state.formData?.categoryName,
      //     // لا تقم بتضمين categoryImage
      //   }
      // }),
    }
  )
);

export default useCategoryForm;