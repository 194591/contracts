import { z } from 'zod';

export interface IRes {
  message?: string;
}

export interface ICreatedRes extends IRes {
  id: string;
}

export const baseQuerySchema = z.object({
  s: z.string().optional(),
  page: z.number().optional().default(1),
  pageSize: z.number().optional().default(10),
});
