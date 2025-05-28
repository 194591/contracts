import { z } from 'zod';

export type TResponse = {
  message?: string;
};

export type TIdentity = {
  id: string;
};

export type ICreatedRes = TResponse & TIdentity;

export type IGetManyRes<T extends TIdentity> = TResponse & {
  items: T[];
  itemCount: number;
  page: number;
  pageSize: number;
};

export type TTimestamp = TIdentity & {
  createdAt: Date;
  updatedAt: Date;
};

export type TUser = {
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
} & TTimestamp;

export type TOptions<T = string> = {
  label: string;
  value: T;
};

export const baseQuerySchema = z.object({
  s: z.string().optional(),
  page: z.coerce.number().optional(),
  pageSize: z.coerce.number().optional(),
});
export type TBaseQuery = z.infer<typeof baseQuerySchema>;
