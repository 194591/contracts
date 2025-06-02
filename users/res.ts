import { z } from 'zod';

export const simpleUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().nullish(),
});
export type TSimpleUser = z.infer<typeof simpleUserSchema>;
