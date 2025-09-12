import api from "@/lib/axios";
import { TABLE_ROWS } from "@/lib/constants";
import { handleApiError } from "@/utils/handleApiError";

interface GetAllUsersParams {
  page?: string;
  pageSize?: string;
  search?: string;
  role?: string;
  category?: string;
  sortBy?: "Asc" | "Desc";
  isActive?: string;
}

export default async function getAllUsers(params: GetAllUsersParams) {
  const apiParams: Record<string, string> = {
    page: params.page || "1",
    pageSize: params.pageSize || TABLE_ROWS.toString(),
  };

  if (params.search) {
    apiParams.search = params.search;
  }

  if (params.role) {
    apiParams.role = params.role;
  }

  if (params.category) {
    apiParams.category = params.category;
  }

  if (params.isActive && params.isActive !== "") {
    apiParams.status = params.isActive;
  }

  if (params.sortBy) {
    apiParams.sortColumn = "CreatedAt";
    apiParams.sortColumnDirection = params.sortBy;
  }

  try {
    const queryParams = new URLSearchParams(apiParams);
    const response = await api.get(`/admin/users?${queryParams.toString()}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// get pending users
export async function getPendingUsers() {
  try {
    const response = await api.get(`/admin/suppliers-to-accept`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// accept pending users

export async function patchPendingUsers(userId: string | number) {
  try {
    const res = await api.patch(`/admin/suppliers/${userId}`);
    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// reject pending users
export async function deletePendingUsers(userId: string | number) {
  try {
    const res = await api.delete(`/admin/suppliers/${userId}`);
    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// funcation to make ban for user
export async function banUser(userId: number) {
  try {
    const res = await api.patch(`/admin/ban?userId=${userId}`);
    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// funcation to make the user active
export async function activeUser(userId: number) {
  try {
    const res = await api.patch(`/admin/active?userId=${userId}`);
    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
