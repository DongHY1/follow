import { TRPCError } from '@trpc/server';
import { getMeHandler } from '../controllers/user.controller';
import { createRouter } from '../utils/router';
export const userRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    if (!ctx.user) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'You must be logged in to access this resource',
      });
    }
    return next();
  })
  .query('me', {
    resolve: ({ ctx }) => getMeHandler({ ctx }),
  });
