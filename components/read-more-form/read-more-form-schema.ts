import { z } from "zod";

const readMoreFormSchema = z.object({
  doctor: z.literal("doctor").optional(),
  scientist: z.literal("scientist").optional(),
  investor: z.literal("investor").optional(),
  other: z.literal("other").optional(),
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email").min(1, "Email is required"),
});

type ReadMoreFormType = z.infer<typeof readMoreFormSchema>;

export { readMoreFormSchema, type ReadMoreFormType };
