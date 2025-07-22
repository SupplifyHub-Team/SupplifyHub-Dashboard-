import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { categorySchema } from "@/schemas/categorySchema";
export interface GetCategoriesParams {
  page?: string;
  pageSize?: string;
  search?: string;
}

export async function getActiveCategories(params?: GetCategoriesParams) {
  const apiParams: Record<string, string> = {
    page: params?.page || "1",
    pageSize: params?.pageSize || "10",
  };

  if (params?.search) {
    apiParams.search = params.search;
  }
  try {
    const queryParams = new URLSearchParams(apiParams);
    const res = await api.get<IPaginatedResponse<IActiveCategory>>(
      `/api/categories?${queryParams.toString()}`
    );

    return res?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Failed to fetch categories"
      );
    }
    throw error;
  }
}

// get pending categories
export async function getPendingCategories() {
  try {
    const res = await api.get<IPaginatedResponse<IPendingCategory>>(
      `/api/category-to-accept`
    );
    return res?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Failed to fetch categories"
      );
    }
    throw error;
  }
}

// funcation to accept pending category
export async function patchPendingCategory(categoryId: string) {
  try {
    const res = await api.patch(`/api/category/${categoryId}`);
    return res?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Failed to fetch categories"
      );
    }
    throw error;
  }
}

// funcation to delete category
export async function deletePendingCategory(categoryId: string) {
  try {
    const res = await api.delete(`/api/category/${categoryId}`);
    return res?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Failed to fetch categories"
      );
    }
    throw error;
  }
}

export async function getCategories(params: ICategoriesFilters) {
  try {
    const res = await api.get<IPaginatedResponse<IActiveCategory>>(
      "/api/categories",
      {
        params,
      }

    );
    return res?.data?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "حدث خطأ أثناء اضافة فئة جديدة"
      );
    }
    throw error;
  }
}
