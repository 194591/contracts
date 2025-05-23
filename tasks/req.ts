import { z } from 'zod';

export const createTaskSchemaForm = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  dueDate: z.coerce.date().min(new Date()).optional(),
  projectId: z.string().optional(),
  assigneeId: z.string().optional(),
  attachments: z.array(z.instanceof(File)).optional(),
});
export type CreateTaskSchemaForm = z.infer<typeof createTaskSchemaForm>;
export const createTaskSchema = createTaskSchemaForm
  .omit({ attachments: true })
  .extend({
    attachments: z.array(z.string()).optional(),
  });
export type CreateTaskSchema = z.infer<typeof createTaskSchema>;

export const updateTaskSchemaForm = createTaskSchemaForm
  .partial()
  .omit({ projectId: true })
  .extend({
    status: z.string().min(1),
  });
export type UpdateTaskSchemaForm = z.infer<typeof updateTaskSchemaForm>;
export const updateTaskSchema = createTaskSchema.partial();
export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>;
