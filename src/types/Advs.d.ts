interface IPendingAdv {
  id: number;
  title: string;
  imagUrl: string;
  createdBy: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

interface IActiveAdv {
  id: number;
  title: string;
  imagUrl: string;
  createdBy: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

interface IActiveAdvsFilters {
  page?: number;
  pageSize?: number;
  search?: string;
  sortColumn?: string;
  sortColumnDirection?: "Asc" | "Desc";
  sortBy?: string;
}

interface IAdditionalAdvs {
  requestId: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
}
interface IAddEventRequest {
  endDate: string;
  title: string;
  imageFile: File;
  targetUrl?: string;
}

interface IAddEventResponse {
  message: string;
}
