import api from "@/lib/axios";
import { isAxiosError } from "axios";

export default async function usersService({
  Page = 1,
  PageSize = 10,
}: {
  Page?: number;
  PageSize?: number;
}) {
  try {
    const response = await api.get<IPaginatedResponse<IUser>>("api/users", {
      params: {
        Page,
        PageSize,
      },
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما, حاول مرة أخرى"
      );
    }
    throw error;
  }
}
