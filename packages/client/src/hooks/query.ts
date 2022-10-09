import { trpc } from '../utils/trpc';

export const useTempQuery = () => {
  return trpc.useQuery(['users.hi']);
};
export const useUserListQuery = () => {
  return trpc.useQuery(['users.list']);
};
