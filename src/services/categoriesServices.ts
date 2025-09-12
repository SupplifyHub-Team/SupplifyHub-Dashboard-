import api from "@/lib/axios";
import { handleApiError } from "@/utils/handleApiError";
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
      `/categories?${queryParams.toString()}`
    );

    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// get pending categories
export async function getPendingCategories() {
  try {
    const res = await api.get<IPaginatedResponse<IPendingCategory>>(
      `/admin/category-to-accept`
    );
    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// funcation to accept pending category
export async function patchPendingCategory(categoryId: string | number) {
  try {
    const res = await api.patch(`/admin/category/${categoryId}`);
    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// funcation to delete pending category
export async function deletePendingCategory(categoryId: string | number) {
  try {
    const res = await api.delete(`/admin/category/${categoryId}`);
    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function getCategories(params: ICategoriesFilters) {
  try {
    const res = await api.get<IPaginatedResponse<IActiveCategory>>(
      "/categories",
      {
        params,
      }
    );
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// funcation to post a new cat
export async function postCategory(data: FormData) {
  try {
    const res = await api.post<IApiResponse<IActiveCategory>>(
      "/admin/category",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// funcation to path category
export async function updateCategory(data: FormData) {
  try {
    const res = await api.put<IApiResponse<IActiveCategory>>(
      "/admin/category",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
