import { z } from 'zod';
import { baseQuerySchema } from '../common';

export const queryChannelSchema = baseQuerySchema.extend({});
export type TQueryChannel = z.infer<typeof queryChannelSchema>;

export const messageQuerySchema = baseQuerySchema.extend({});
export type IMessageQuery = z.infer<typeof messageQuerySchema>;
