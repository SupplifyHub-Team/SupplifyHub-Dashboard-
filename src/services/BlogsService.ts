import api from "@/lib/axios";
import { handleApiError } from "@/utils/handleApiError";

export async function getBlogs({
  page = 1,
  pageSize = 10,
}: {
  page?: number;
  pageSize?: number;
} = {}) {
  try {
    const response = await api.get<IPaginatedResponse<IBlogCard>>("/posts", {
      params: { page, pageSize },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function getBlogPost({ slug }: { slug: string }) {
  try {
    const response = await api.get<IApiResponse<IBlogPost>>("/post", {
      params: { slug },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function deleteBlogPost({ id }: { id: string | number }) {
  try {
    const response = await api.delete<
      IApiResponse<{
        message: string;
      }>
    >(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function patchBlogPost(data: FormData, id: string | number) {
  try {
    const response = await api.patch<IApiMessage>(`/post/${id}`, data);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function postBlog(data: FormData) {
  try {
    const response = await api.post<IApiMessage>(`/post`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
