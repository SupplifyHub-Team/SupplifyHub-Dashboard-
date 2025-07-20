import z from "zod";

export const pricingPlanSchema = z.object({
  planName: z.string(),
  description: z.string(),
  price: z.string(),
  duration: z.string(),
  pros: z.array(z.string()).nullable().optional(),
  cons: z.array(z.string()).nullable().optional(),
});

export type pricingPlanSchema = z.infer<typeof pricingPlanSchema>;
