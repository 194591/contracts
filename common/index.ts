/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z, ZodRawShape } from 'zod';

export type TResponse = {
  message?: string;
};

export const identitySchema = z.object({
  id: z.string(),
});
export type TIdentity = {
  id: string;
};

export type TCreatedRes = TResponse & TIdentity;

export type TTimestamp = TIdentity & {
  createdAt: Date;
  updatedAt: Date;
};

export const timestampSchema = identitySchema.extend({
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TUser = {
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
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

export const baseQueryExtendedSchema = baseQuerySchema.extend({
  'inIds[]': z
    .preprocess(
      (val) => (Array.isArray(val) ? val : [val]),
      z.string().array().optional(),
    )
    .default([]),
  'notInIds[]': z
    .preprocess(
      (val) => (Array.isArray(val) ? val : [val]),
      z.string().array().optional(),
    )
    .default([]),
});
export type TBaseQueryExtended = z.infer<typeof baseQueryExtendedSchema>;

export const getManyResSchema = <T extends ZodRawShape>(
  schema: z.ZodObject<T>,
) =>
  z.object({
    items: z.array(schema),
    itemCount: z.number(),
    page: z.number(),
    pageSize: z.number(),
  });
export type TGetManyRes<T extends TIdentity> = TResponse & {
  items: T[];
  itemCount: number;
  page: number;
  pageSize: number;
};
