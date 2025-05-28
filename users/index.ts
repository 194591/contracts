export * from './res';

import { initContract } from '@ts-rest/core';

import { IGetManyRes } from '../common';

import { querySimpleUserSchema } from './query';
import { TSimpleUser } from './res';

const c = initContract();

export const userContract = c.router(
  {
    getSimpleUsers: {
      method: 'GET',
      path: '/simple',
      query: querySimpleUserSchema,
      responses: {
        200: c.type<IGetManyRes<TSimpleUser>>(),
      },
    },
  },
  {
    pathPrefix: '/users',
  },
);
