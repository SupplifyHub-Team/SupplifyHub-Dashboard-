interface IActiveCategory {
  categoryId: number | string;
  categoryName: string;
  imageURL: string | null;
  numberOfAssociatedSuppliers: number;
  numberOfAssociatedClients: number;
}

interface IPendingCategory {
  categoryId: number | string;
  categoryName: string;
  userName: string;
  userEmail: string;
}
interface ICategoriesFilters {
  search?: string;
  page?: number;
  pageSize?: number;
  sortColumn?: string;
  sortColumnDirection?: "Asc" | "Desc";
}
