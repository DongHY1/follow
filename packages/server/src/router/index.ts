import redisClient from '../utils/connectRedis';
import { createRouter } from '../utils/router';
import { authRouter } from './auth.router';
import { userRouter } from './user.router';
export const appRouter = createRouter()
  .query('hello', {
    resolve: async () => {
      const message = await redisClient.get('tRPC');
      return { message };
    },
  })
  .merge('auth.', authRouter)
  .merge('users.', userRouter);

export type AppRouter = typeof appRouter;
