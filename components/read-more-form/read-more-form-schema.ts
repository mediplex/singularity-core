import { z } from "zod";

const readMoreFormSchema = z.object({
  qualification: z.array(z.string()).optional(),
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email").min(1, "Email is required"),
});

type ReadMoreFormType = z.infer<typeof readMoreFormSchema>;

export { readMoreFormSchema, type ReadMoreFormType };
