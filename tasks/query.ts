import { z } from 'zod';

import { baseQuerySchema } from '../common';

const _taskOrderBy = [
  'id',
  'name',
  'dueDate',
  'createdAt',
  'updatedAt',
] as const;

export type ITaskOrderBy = (typeof _taskOrderBy)[number];

export const taskQuerySchema = baseQuerySchema.extend({
  orderBy: z.enum(_taskOrderBy).optional(),
  order: z.enum(['ASC', 'DESC']).optional(),
  name: z.string().optional(),
  dueDate: z.coerce.date().optional(),
});
export type ITaskQuery = z.infer<typeof taskQuerySchema>;
