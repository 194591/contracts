import { z } from "zod";

export const createTaskSchemaForm = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  dueDate: z.coerce.date().min(new Date()).optional(),
  attachments: z.array(z.instanceof(File)).optional(),
});
export type CreateTaskSchemaForm = z.infer<typeof createTaskSchemaForm>;
export const createTaskSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  dueDate: z.coerce.date().optional(),
  attachments: z.array(z.string()).optional(),
});
export type CreateTaskSchema = z.infer<typeof createTaskSchema>;

export const updateTaskSchemaForm = createTaskSchemaForm.partial();
export type UpdateTaskSchemaForm = z.infer<typeof updateTaskSchemaForm>;
export const updateTaskSchema = createTaskSchema.partial();
export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>;
