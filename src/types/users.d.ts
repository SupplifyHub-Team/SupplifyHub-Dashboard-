interface IUser {
  userId: number;
  companyName: string;
  userName: string;
  isActive: boolean;
  role: string;
  categoryNames: string[];
  joinDate: string;
  locations: string[];
  email: string;
  phoneNumber: string;
}
interface IPendingUser {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  logoURL: string;
  pdfURL: string;
  categories: string[];
}
