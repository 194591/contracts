import { initContract } from '@ts-rest/core';
import { messageContract } from './messages';

const c = initContract();

export const contract = c.router(
  {
    health: {
      method: 'GET',
      path: '/health',
      responses: {
        200: c.type<string>(),
      },
    },
    message: messageContract,
  },
  {
    pathPrefix: '/api',
  },
);
