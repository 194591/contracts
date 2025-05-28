export * from './const';
export * from './query';
export * from './req';
export * from './res';

import { initContract } from '@ts-rest/core';

import type { IGetManyRes, TResponse } from '../common';

import { taskQuerySchema } from './query';
import { createTaskSchema, updateTaskSchema } from './req';
import type { ITask } from './res';

const c = initContract();

export const taskContract = c.router(
  {
    createTask: {
      method: 'POST',
      path: '/',
      contentType: 'multipart/form-data',
      body: createTaskSchema,
      responses: {
        200: c.type<ITask>(),
      },
    },
    updateTask: {
      method: 'PATCH',
      path: '/:id',
      body: updateTaskSchema,
      responses: {
        200: c.type<ITask>(),
      },
    },
    getTasks: {
      method: 'GET',
      path: '/',
      query: taskQuerySchema,
      responses: {
        200: c.type<IGetManyRes<ITask>>(),
      },
    },
    getTask: {
      method: 'GET',
      path: '/:id',
      responses: {
        200: c.type<ITask>(),
      },
    },
    deleteTask: {
      method: 'DELETE',
      path: '/:id',
      responses: {
        200: c.type<TResponse>(),
      },
    },
  },
  {
    pathPrefix: '/tasks',
  },
);
