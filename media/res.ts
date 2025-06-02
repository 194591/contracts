import { z } from 'zod';

import { timestampSchema } from '../common';

export const mediaFileSchema = timestampSchema.extend({
  key: z.string(),
  name: z.string(),
  size: z.number(),
  mimetype: z.string(),
  description: z.string().optional(),
  folderId: z.string(),
});
export type TMediaFile = z.infer<typeof mediaFileSchema>;

export const mediaFolderSchema = timestampSchema.extend({
  name: z.string(),
  description: z.string().optional(),
  parentId: z.string().optional(),
});
export type TMediaFolder = z.infer<typeof mediaFolderSchema>;
