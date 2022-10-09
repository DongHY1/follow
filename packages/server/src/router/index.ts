import redisClient from '../utils/connectRedis';
import { createRouter } from '../utils/router';
import { authRouter } from './auth.router';
import { userRouter } from './user.router';
export const appRouter = createRouter()
  .query('hi', {
    resolve: async () => {
      const message = await redisClient.get('tRPC');
      return { message };
    },
  })
  .query('haha', {
    resolve: () => {
      const message = 'hello';
      return { message };
    },
  })
  .merge('auth.', authRouter)
  .merge('users.', userRouter);

export type AppRouter = typeof appRouter;
