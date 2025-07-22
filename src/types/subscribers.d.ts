interface ISubscribedSuppliersFilters {
  search?: string;
  page?: number;
  pageSize?: number;
  sortColumn?: string;
  sortColumnDirection?: "Asc" | "desc";
  status?: string;
  planName?: string;
}

interface ISubscribedSuppliers {
  userId: number | string;
  companyName: string;
  email: string;
  planName: string;
  paymentStatus: string;
  startPlanDate: string;
  endPlanDate: string;
  joinDate: string;
  ordersCompleted: number | string;
}
