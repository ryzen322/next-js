import { z } from "zod";

export const FormPostSchema = z.object({
  title: z.string().min(4, "Please enter at least 4 character"),
  email: z.string().email(),
  content: z.string().min(10, "Please enter at least 10 character"),
  name: z.string(),
});

export const FormTweetSchema = z.object({
  content: z.string().min(10, "Please enter at least 10 character"),
  title: z.string().min(4, "please title atleast 4 character"),
});
