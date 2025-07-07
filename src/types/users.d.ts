declare interface IUser {
  id: string;
  name: string;
  email: string;
  role: "client" | "jobber" | "supplier";
  createdAt: string;
  category: string;
}
