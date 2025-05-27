export * from './res';

import { initContract } from '@ts-rest/core';
import { baseQuerySchema, IGetManyRes } from '../common';
import { TSimpleUser } from './res';

const c = initContract();

export const userContract = c.router(
  {
    getSimpleUsers: {
      method: 'GET',
      path: '/simple',
      query: baseQuerySchema,
      responses: {
        200: c.type<IGetManyRes<TSimpleUser>>(),
      },
    },
  },
  {
    pathPrefix: '/users',
  },
);
