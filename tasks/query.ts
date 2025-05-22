import { z } from 'zod';
import { baseQuerySchema } from '../common';

export const taskQuerySchema = baseQuerySchema.extend({
  orderBy: z.enum(['id', 'name']).optional(),
  order: z.enum(['asc', 'desc']).optional(),
});
export type ITaskQuery = z.infer<typeof taskQuerySchema>;
