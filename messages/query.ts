import { z } from 'zod';
import { baseQuerySchema } from '../common';

export const queryChannelSchema = baseQuerySchema.extend({});
export type TQueryChannel = z.infer<typeof queryChannelSchema>;

export const queryMessageSchema = baseQuerySchema.extend({});
export type TQueryMessage = z.infer<typeof queryMessageSchema>;
