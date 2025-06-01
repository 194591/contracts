export * from './const';
export * from './query';
export * from './req';
export * from './res';

import { initContract } from '@ts-rest/core';

import type { ICreatedRes, IGetManyRes } from '../common';

import { queryMessageSchema, queryChannelSchema } from './query';
import {
  createChannelSchema,
  createMessageSchema,
  updateChannelSchema,
  updateMessageSchema,
} from './req';
import type { TChannel, TMessage } from './res';

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
      query: queryMessageSchema,
      responses: {
        200: c.type<IGetManyRes<TMessage>>(),
      },
    },
  },
  {
    pathPrefix: '/:channelId/messages',
  },
);

export const channelContract = c.router(
  {
    getChannels: {
      method: 'GET',
      path: '/',
      query: queryChannelSchema,
      responses: { 200: c.type<IGetManyRes<TChannel>>() },
    },
    getChannel: {
      method: 'GET',
      path: '/:channelId',
      responses: { 200: c.type<TChannel>() },
    },
    createChannel: {
      method: 'POST',
      path: '/',
      summary: 'Create a channel',
      body: createChannelSchema,
      responses: { 200: c.type<ICreatedRes>() },
    },
    updateChannel: {
      method: 'PATCH',
      path: '/:channelId',
      summary: 'Update a channel',
      body: updateChannelSchema,
      responses: { 200: c.type<ICreatedRes>() },
    },
    deleteChannel: {
      method: 'DELETE',
      path: '/:channelId',
      summary: 'Delete a channel',
      responses: { 200: c.type<ICreatedRes>() },
    },
    uploadAttachments: {
      method: 'POST',
      path: 'attachments',
      contentType: 'multipart/form-data',
      body: c.type<{ files: File[] }>(),
      responses: {
        200: c.type<{ keys: string[] }>(),
      },
    },
    message: messageContract,
  },
  {
    pathPrefix: '/channels',
  },
);
