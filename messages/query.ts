import { z } from 'zod';
import { baseQuerySchema } from '../common';

export const messageQuerySchema = baseQuerySchema.extend({});
export type IMessageQuery = z.infer<typeof messageQuerySchema>;
