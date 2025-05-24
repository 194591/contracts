import { initContract } from '@ts-rest/core';
import { mediaContract } from './media';
import { channelContract } from './messages';
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
    channel: channelContract,
    task: taskContract,
  },
  {
    pathPrefix: '/api',
  },
);
