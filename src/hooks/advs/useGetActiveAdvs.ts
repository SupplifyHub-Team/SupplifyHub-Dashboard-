import { getActiveAdvs } from "@/services/AdvsServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetActiveAdvs() {
  return useQuery<IApiResponse<IActiveAdv[]>, IErrorResponse>({
    queryKey: ["activeAdvs"],
    queryFn: getActiveAdvs,
  });
}
