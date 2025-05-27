import { z } from 'zod';

export const createMessageSchema = z.object({
  content: z.string(),
});
export type TCreateMessageSchema = z.infer<typeof createMessageSchema>;

export const updateMessageSchema = createMessageSchema.partial();
export type TUpdateMessageSchema = z.infer<typeof updateMessageSchema>;

export const createChannelSchema = z.object({
  name: z.string(),
  isDM: z.boolean().optional(),
  memberIds: z.array(z.string()).optional(),
});
export type TCreateChannelSchema = z.infer<typeof createChannelSchema>;

export const updateChannelSchema = createChannelSchema
  .partial()
  .omit({ memberIds: true });
export type TUpdateChannelSchema = z.infer<typeof updateChannelSchema>;
