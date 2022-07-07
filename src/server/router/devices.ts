import { TRPCError } from '@trpc/server';
import { createRouter } from './context';
import { z } from 'zod';

export const deviceRouter = createRouter()
  // .query("getSession", {
  //   resolve({ ctx }) {
  //     return ctx.session;
  //   },
  // })
  .middleware(async ({ ctx, next }) => {
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next();
  })
  .query('getDevices', {
    async resolve({ ctx }) {
      return await ctx.prisma.device.findMany({
        where: {
          ownerID: {
            equals: ctx.session.uid,
          },
        },
      });
    },
  })
  .mutation('addDevice', {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.device.create({
        data: {
          name: input.name,
          ownerID: ctx.session.uid,
        },
      });
    },
  })
  .mutation('removeDevice', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      const d = await ctx.prisma.device.findFirst({
        where: {
          ownerID: ctx.session.uid,
          id: input.id,
        },
      });

      if (!d) {
        return {};
      }

      return await ctx.prisma.device.delete({
        where: {
          id: input.id,
        },
      });
    },
  });
