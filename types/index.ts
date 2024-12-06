import { z } from "zod";

export const FormPostSchema = z.object({
  name: z.string().min(4, "Please enter at least 4 character"),
  title: z.string().min(4, "Please enter at least 4 character"),
  content: z.string().min(10, "Please enter at least 4 character"),
});
