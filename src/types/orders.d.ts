interface IOrder {
  OrderId: number;
  companyName: string;
  email: string;
  category: string;
  orderStatus: "Active" | "InProgress" | "Completed" | "Failed";
  offerNumbers: number;
  orderItems: IOrderItems[];
  deadline: string;
  createdAt: string;
}

interface IOrderItems {
  id: number;
  name: string;
  quantity: number;
  notes: string;
}

interface IAdditionalOrders {
  requestId: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
}
