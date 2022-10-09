import { inferAsyncReturnType, router } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { deserializeUser } from '../middleware/deserializeUser';
export const createContext = ({ req, res }: CreateExpressContextOptions) =>
  deserializeUser({ req, res });
export type Context = inferAsyncReturnType<typeof createContext>;
export function createRouter() {
  return router<Context>();
}
