declare interface IActiveCategory {
  categoryId: string;
  categoryName: string;
  numberOfAssociatedSuppliers: number;
  numberOfAssociatedClients: number;
}
declare interface ICategoriesFilters {
  search?: string;
  page?: number;
  pageSize?: number;
  sortColumn?: string;
  sortColumnDirection?: "Asc" | "Desc";
}
