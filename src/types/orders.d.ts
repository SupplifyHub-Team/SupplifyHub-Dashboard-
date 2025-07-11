declare interface IOrder {
  id: string;
  name: string;
  email: string;
  category: string;
  state: "active" | "in progress" | "completed" | "failed";
  offersNumber: number;
  desciption: string;
  deadline: string;
  createdAt: string;
}

