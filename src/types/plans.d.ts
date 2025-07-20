interface IPlan {
  id: number ;
  createdAt: string;
  updatedAt: string;
  planName: string;
  price: number;
  description: string;
  duration: number;
  pons: string[] | null;
  pros: string[] | null;
}
