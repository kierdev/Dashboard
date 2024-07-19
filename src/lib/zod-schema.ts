import { z } from "zod";

export const productSchema = z.object({
  id: z.optional(z.string()),
  name: z.string({ required_error: "Name is required" }),
  category: z.string({ required_error: "Category is required" }),
  color: z.string({ required_error: "Color is required" }),
  code: z.string().min(8, { message: "Must be 8 or more characters long" }),
  price: z.number(),
  acquisitionCost: z.number(),
  grossProfit: z.any(),
  margin: z.any(),
  status: z.string(),
  image: z.any(),
  dateAcquired: z.any(), // success: true,
  dateReleased: z.any(), // success: true,
  description: z.string(),
});

export type TProduct = z.infer<typeof productSchema>;
