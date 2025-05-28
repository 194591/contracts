import { initContract } from '@ts-rest/core';

const c = initContract();

export const mediaContract = c.router(
  {
    upload: {
      method: 'POST',
      path: '/',
      contentType: 'multipart/form-data',
      body: c.type<{ file: File }>(),
      responses: {
        200: c.type<{ key: string }>(),
      },
    },
    uploadBulk: {
      method: 'POST',
      path: '/bulk',
      contentType: 'multipart/form-data',
      body: c.type<{ files: File[] }>(),
      responses: {
        200: c.type<{ keys: string[] }>(),
      },
    },
  },
  {
    pathPrefix: '/media',
  },
);
