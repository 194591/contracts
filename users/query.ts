/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from 'zod';

import { baseQuerySchema } from '../common';

export const querySimpleUserSchema = baseQuerySchema.extend({
  'notInIds[]': z.preprocess(
    (val) => (Array.isArray(val) ? val : [val]),
    z.string().array().optional(),
  ),
});
export type TQuerySimpleUser = z.infer<typeof querySimpleUserSchema>;
