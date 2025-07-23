declare interface IOrder {
  OrderId: string;
  companyName: string;
  email: string;
  category: string;
  orderStatus: "Active" | "InProgress" | "Completed" | "Failed";
  offerNumbers: number;
  orderDisc: string;
  deadline: string;
  createdAt: string;
}

