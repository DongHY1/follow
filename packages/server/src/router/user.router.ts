import { TRPCError } from '@trpc/server';
import { getUserListHandler } from '../controllers/user.controller';
import { createRouter } from '../utils/router';
export const userRouter = createRouter()
  // .middleware(async ({ ctx, next }) => {
  //   if (!ctx.user) {
  //     throw new TRPCError({
  //       code: 'UNAUTHORIZED',
  //       message: 'You must be logged in to access this resource',
  //     });
  //   }
  //   return next();
  // })
  .query('hi', {
    resolve: () => {
      const message = 'hello world';
      return message;
    },
  })
  .query('list', {
    resolve: async ({ ctx }) => {
      const res = await getUserListHandler({ ctx });
      return res;
    },
  });
