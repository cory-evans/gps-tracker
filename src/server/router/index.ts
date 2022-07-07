// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { authRouter } from './auth';
import { deviceRouter } from './devices';
import { positionRouter } from './position';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('devices.', deviceRouter)
  .merge('position.', positionRouter)
  .merge('example.', exampleRouter)
  .merge('auth.', authRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
