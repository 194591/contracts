export * from './query';
export * from './req';
export * from './res';

import { initContract } from '@ts-rest/core';
import { ICreatedRes, IGetManyRes } from '../common';
import { messageQuerySchema } from './query';
import {
  createChannelSchema,
  createMessageSchema,
  updateMessageSchema,
} from './req';
import { IMessage } from './res';

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
      path: '/:messageId',
      summary: 'Update a message',
      body: updateMessageSchema,
      responses: {
        200: c.type<ICreatedRes>(),
      },
    },
    getMessages: {
      method: 'GET',
      path: '/',
      query: messageQuerySchema,
      responses: {
        200: c.type<IGetManyRes<IMessage>>(),
      },
    },
  },
  {
    pathPrefix: '/messages',
  },
);

export const channelContract = c.router(
  {
    createChannel: {
      method: 'POST',
      path: '/',
      summary: 'Create a channel',
      body: createChannelSchema,
      responses: {
        200: c.type<ICreatedRes>(),
      },
    },
    message: messageContract,
  },
  {
    pathPrefix: '/channels/:channelId',
  },
);
