import { TRPCError } from '@trpc/server';
import { createRouter } from './context';
import { z } from 'zod';

export const positionRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next();
  })
  .query('latest', {
    async resolve({ ctx }) {
      return await ctx.prisma.position.findMany({
        distinct: ['deviceID'],
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
        where: {
          device: {
            ownerID: {
              equals: ctx.session.uid,
            },
          },
        },
      });
    },
  });
