import { ApiError } from "@/utils/handleApiError";
import { QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      onError: (error: ApiError) => {
        console.error("Mutation error:", error);
        toast.error(error.message || "An unexpected error occurred");
      },
    },
  },
});
