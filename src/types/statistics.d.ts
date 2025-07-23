interface IGeneralStatistics {
  totalOrders: number;
  totalUsers: number;
  totalCategories: number;
  newOrdersThisMonth: number;
  newUsersThisMonth: number;
  newCategoriesThisMonth: number;
}
interface IUserStatistics {
  category: "Clients" | "Jobseekers" | "Suppliers";
  totalCount: number;
  newThisMonth: number;
  newUserPercentage: number;
}
interface IOrderStatistic {
  month: number;
  orderCount: number;
}

interface IOrderStatusStatistic {
  status: string
  totalCount: number
  newThisMonth: number
}
