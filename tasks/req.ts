import { z } from "zod";

export const createTaskSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  dueDate: z.coerce.date().optional(),
  attachments: z.array(z.instanceof(File)).optional(),
});
export type CreateTaskSchema = z.infer<typeof createTaskSchema>;

export const updateTaskSchema = createTaskSchema.partial();
export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>;
