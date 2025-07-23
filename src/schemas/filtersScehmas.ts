import z from "zod";

/* User Filters */
export const userFiltersSchema = z.object({
  search: z.string().optional(),
  sortBy: z.string().optional(),
  category: z.string().optional(),
  role: z.string().optional(),
});

export type userFiltersSchema = z.infer<typeof userFiltersSchema>;

/* Subscribed Suppliers Filters */
export const subscribedSuppliersFiltersSchema = z.object({
  search: z.string().optional(),
  planName: z.string().optional(),
  status: z.string().optional(),
  sortColumn: z.string(),
  sortColumnDirection: z.enum(["Asc", "Desc"]),
});

export type subscribedSuppliersFiltersSchema = z.infer<
  typeof subscribedSuppliersFiltersSchema
>;

/* Orders Filters */
export const ordersFiltersSchema = z.object({
  status: z.string().optional(),
  category: z.string().optional(),
  sortBy: z.string().optional(),
  search: z.string().optional(),
});

export type ordersFiltersSchema = z.infer<typeof ordersFiltersSchema>;
