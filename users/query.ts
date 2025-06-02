import { z } from 'zod';

import { baseQueryExtendedSchema } from '../common';

export const querySimpleUserSchema = baseQueryExtendedSchema.extend({});
export type TQuerySimpleUser = z.infer<typeof querySimpleUserSchema>;
