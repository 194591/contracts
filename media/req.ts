import { z } from 'zod';

export const createFolderSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  parentId: z.string().optional(),
});
export type TCreateFolder = z.infer<typeof createFolderSchema>;

export const updateFolderSchema = createFolderSchema.partial();
export type TUpdateFolder = z.infer<typeof updateFolderSchema>;

export const updateFileSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  folderId: z.string().optional(),
});
export type TUpdateFile = z.infer<typeof updateFileSchema>;
