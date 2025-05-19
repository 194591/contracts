export * from './req';

import { initContract } from '@ts-rest/core';
import { ICreatedRes } from '../common';
import { createMessageSchema, updateMessageSchema } from './req';

const c = initContract();

export const messageContract = c.router(
  {
    createMessage: {
      method: 'POST',
      path: '/',
      summary: 'Create a message',
      body: createMessageSchema,
      responses: {
        200: c.type<ICreatedRes>(),
      },
    },
    updateMessage: {
      method: 'PATCH',
      path: '/:id',
      summary: 'Update a message',
      body: updateMessageSchema,
      responses: {
        200: c.type<ICreatedRes>(),
      },
    },
    getMessages: {
      method: 'GET',
      path: '/',
      responses: {
        200: c.type<{
          data: {
            id: string;
          }[];
        }>(),
      },
    },
  },
  {
    pathPrefix: '/messages',
  },
);
