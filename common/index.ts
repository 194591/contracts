import { z } from 'zod';

export interface IRes {
  message?: string;
}

export interface ICreatedRes extends IRes {
  id: string;
}

export const baseQuerySchema = z.object({
  s: z.string().optional(),
  page: z.coerce.number().optional().default(1),
  pageSize: z.coerce.number().optional().default(10),
});

export interface IGetManyRes<T> {
  items: T[];
  itemCount: number;
  page: number;
  pageSize: number;
}
