import { z } from "zod";
const formSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(50, "Title cannot be more than 50 characters long"),
  content: z.string().min(1, "Content box cannot be empty"),
});

export type FormSchemaType = z.infer<typeof formSchema>;

export default formSchema;
