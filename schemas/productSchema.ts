import * as zod from "zod";

export const SearchProductSchema = zod.object({
  query: zod
    .string()
    .trim()
    .min(2, { message: "Minimum query length is 2" })
    .max(100, { message: "Maximum query length is 30" }),
});
