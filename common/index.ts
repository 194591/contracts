import { z } from 'zod';

export type IRes = {
  message?: string;
};

export type IId = {
  id: string;
};

export type ICreatedRes = IRes & IId;

export type IGetManyRes<T> = {
  items: T[];
  itemCount: number;
  page: number;
  pageSize: number;
};

export type TRecordWithTimestamp = IId & {
  createdAt: Date;
  updatedAt: Date;
};

export type TUser = {
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
} & TRecordWithTimestamp;

export const baseQuerySchema = z.object({
  s: z.string().optional(),
  page: z.coerce.number().optional(),
  pageSize: z.coerce.number().optional(),
});
