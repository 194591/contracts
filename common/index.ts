import { z } from "zod";

type DataModelId = string | number;
export interface DataModel {
  id: DataModelId;
  [key: PropertyKey]: unknown;
}

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

export interface IGetManyRes<T extends DataModel> {
  items: T[];
  itemCount: number;
  page: number;
  pageSize: number;
}
