interface IOrder {
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

interface IAdditionalOrders {
  requestId: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
}
