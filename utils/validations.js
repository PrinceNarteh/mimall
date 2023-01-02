import { z } from "zod";

export const createProductDto = z.object({
  title: z.string(),
  description: z
    .string({ required_error: "Description is required" })
    .min(2, "Description should be 2 or more characters"),
  price: z
    .number({ required_error: "Price is required" })
    .gte(0, "Price cannot be negative"),
  discountPercentage: z.number().gte(0, "Price cannot be negative").optional(),
  stock: z
    .number({ required_error: "Stock is required" })
    .gte(0, "Price cannot be negative"),
  brand: z
    .string({ required_error: "Brand is required" })
    .min(2, "Brand should be 2 or more characters"),
  category: z
    .string({ required_error: "Category is required" })
    .min(2, "Category should be 2 or more characters"),
  ratings: z
    .number()
    .min(1, "Minimum rating should be 1")
    .max(5, "Maximum rating should be 5")
    .optional(),
});

export const updateProductDto = createProductDto.partial();
