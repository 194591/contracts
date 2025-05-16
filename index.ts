import { initContract } from '@ts-rest/core';

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
  },
  {
    pathPrefix: '/api',
  },
);
