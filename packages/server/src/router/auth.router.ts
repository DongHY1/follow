import { createUserSchema, loginUserSchema } from '../schema/user.schema';
import {
  loginHandler,
  logoutHandler,
  refreshAccessTokenHandler,
  registerHandler,
} from '../controllers/auth.controller';
import { createRouter } from '../utils/router';
export const authRouter = createRouter()
  .mutation('register', {
    input: createUserSchema,
    resolve: ({ input }) => registerHandler({ input }),
  })
  .mutation('login', {
    input: loginUserSchema,
    resolve: async ({ input, ctx }) => await loginHandler({ input, ctx }),
  })
  .mutation('logout', {
    resolve: ({ ctx }) => logoutHandler({ ctx }),
  })
  .query('refresh', {
    resolve: ({ ctx }) => refreshAccessTokenHandler({ ctx }),
  });
