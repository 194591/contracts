import { z } from 'zod';
import { baseQuerySchema } from '../common';

export const taskQuerySchema = baseQuerySchema.extend({});
export type ITaskQuery = z.infer<typeof taskQuerySchema>;
