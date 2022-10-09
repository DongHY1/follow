import { TRPCError } from '@trpc/server';
import { findAllUser } from '../services/user.services';
import type { Context } from '../utils/router';

export const getMeHandler = ({ ctx }: { ctx: Context }) => {
  try {
    const user = ctx.user;
    return {
      status: 'success',
      data: {
        user,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
};
export const getUserListHandler = async ({ ctx }: { ctx: Context }) => {
  try {
    const userlist = await findAllUser({ id: true, email: true });
    return {
      status: 'success',
      data: {
        userlist,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: err.message,
    });
  }
};
