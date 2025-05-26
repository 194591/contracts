import { z } from 'zod';

export const createMessageSchema = z.object({
  content: z.string(),
});
export type CreateMessageSchema = z.infer<typeof createMessageSchema>;

export const updateMessageSchema = createMessageSchema.partial();
export type UpdateMessageSchema = z.infer<typeof updateMessageSchema>;

export const createChannelSchema = z.object({
  name: z.string(),
  isDM: z.boolean().optional(),
  memberIds: z.array(z.string()).optional(),
});
export type CreateChannelSchema = z.infer<typeof createChannelSchema>;

export const updateChannelSchema = createChannelSchema
  .partial()
  .omit({ memberIds: true });
export type UpdateChannelSchema = z.infer<typeof updateChannelSchema>;
