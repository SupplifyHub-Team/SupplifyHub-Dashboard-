import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function getCategories(params: ICategoriesFilters) {
  try {
    const res = await api.get<IPaginatedResponse<IActiveCategory>>(
      "/api/categories",
      {
        params,
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    if (isAxiosError(error)) {
      const errResponse = error.response?.data as IErrorResponse;
      throw new Error(errResponse.data.message);
    }
    throw error;
  }
}
