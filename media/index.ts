import { initContract } from '@ts-rest/core';

const c = initContract();

export const mediaContract = c.router(
  {
    upload: {
      method: 'POST',
      path: '/',
      contentType: 'multipart/form-data',
      body: c.type<{ file: File }>(), // <- Use File type in here
      responses: {
        200: c.type<{ key: string }>(),
      },
    },
  },
  {
    pathPrefix: '/media',
  },
);
