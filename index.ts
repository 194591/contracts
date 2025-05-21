import { initContract } from '@ts-rest/core';
import { mediaContract } from './media';
import { messageContract } from './messages';
import { taskContract } from './tasks';

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
    media: mediaContract,
    message: messageContract,
    task: taskContract,
  },
  {
    pathPrefix: '/api',
  },
);
