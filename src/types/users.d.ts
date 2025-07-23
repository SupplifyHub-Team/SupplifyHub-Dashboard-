declare interface IUser {
  userId: number;
  companyName: string;
  email: string;
  role: "client" | "jobber" | "supplier";
  createdAt: string;
  categoryNames: string[];
  joinDate: string;
}
