declare interface IActiveCategory {
  categoryId: number | string;
  categoryName: string;
  numberOfAssociatedSuppliers: number;
  numberOfAssociatedClients: number;
}


declare interface IPendingCategory {
  id: number | string;
  categoryName?: string;
  email: string;
  submittedAt: string;
}
declare interface ICategoriesFilters {
  search?: string;
  page?: number;
  pageSize?: number;
  sortColumn?: string;
  sortColumnDirection?: "Asc" | "Desc";
}
