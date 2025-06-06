export * from './req';
export * from './res';

import { initContract } from '@ts-rest/core';

import { baseQuerySchema, getManyResSchema, identitySchema } from '../common';

import { createFolderSchema, updateFolderSchema } from './req';
import { mediaFileSchema, mediaFolderSchema, TMediaFolderDetail } from './res';

const c = initContract();

export const mediaContract = c.router(
  {
    upload: {
      method: 'POST',
      path: '/',
      contentType: 'multipart/form-data',
      body: c.type<{ file: File; folderId?: string }>(),
      responses: {
        200: c.type<{ key: string }>(),
      },
    },
    uploadBulk: {
      method: 'POST',
      path: '/bulk',
      contentType: 'multipart/form-data',
      body: c.type<{ files: File[]; folderId?: string }>(),
      responses: {
        200: c.type<{ keys: string[] }>(),
      },
    },
    createFolder: {
      method: 'POST',
      path: '/folder',
      body: createFolderSchema,
      responses: {
        200: identitySchema,
      },
    },
    updateFolder: {
      method: 'PATCH',
      path: '/folder/:folderId',
      body: updateFolderSchema,
      responses: {
        200: identitySchema,
      },
    },
    getFolder: {
      method: 'GET',
      path: '/folder/:folderId',
      responses: {
        200: c.type<TMediaFolderDetail>(),
      },
    },
    getFolderSubfolders: {
      method: 'GET',
      path: '/folder/:folderId/subfolders',
      responses: {
        200: getManyResSchema(mediaFolderSchema),
      },
    },
    getFolderFiles: {
      method: 'GET',
      path: '/folder/:folderId/files',
      query: baseQuerySchema,
      responses: {
        200: getManyResSchema(mediaFileSchema),
      },
    },
  },
  {
    pathPrefix: '/media',
  },
);
