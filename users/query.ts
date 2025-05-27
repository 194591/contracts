import { z } from 'zod';
import { baseQuerySchema } from '../common';

export const querySimpleUserSchema = baseQuerySchema.extend({
  notInIds: z.string().array().optional(),
});
export type TQuerySimpleUser = z.infer<typeof querySimpleUserSchema>;
