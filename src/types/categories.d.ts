declare interface IActiveCategory {
  categoryId: number;
  categoryName: string;
  numberOfAssociatedSuppliers: number;
  numberOfAssociatedClients: number;
}

declare interface IPendingCategory {
  id: number;
  categoryName?: string;
  email: string;
  submittedAt: string;
}
