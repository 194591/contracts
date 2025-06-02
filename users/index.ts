export * from './res';

import { initContract } from '@ts-rest/core';

import { getManyResSchema } from '../common';

import { querySimpleUserSchema } from './query';
import { simpleUserSchema } from './res';

const c = initContract();

export const userContract = c.router(
  {
    getSimpleUsers: {
      method: 'GET',
      path: '/simple',
      query: querySimpleUserSchema,
      responses: {
        200: getManyResSchema(simpleUserSchema),
      },
    },
  },
  {
    pathPrefix: '/users',
  },
);
