export * from './query';
export * from './req';
export * from './res';

import { initContract } from '@ts-rest/core';
import { ICreatedRes, IGetManyRes, IRes } from '../common';
import { taskQuerySchema } from './query';
import { createTaskSchema, updateTaskSchema } from './req';
import { ITask } from './res';

const c = initContract();

export const taskContract = c.router(
  {
    createTask: {
      method: 'POST',
      path: '/',
      body: createTaskSchema,
      responses: {
        200: c.type<ICreatedRes>(),
      },
    },
    updateTask: {
      method: 'PATCH',
      path: '/:id',
      body: updateTaskSchema,
      responses: {
        200: c.type<IRes>(),
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
  },
  {
    pathPrefix: '/tasks',
  },
);
