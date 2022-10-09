import {
  createUser,
  findUser,
  findAllUser,
} from '../src/services/user.services';
import { prismaMock } from './../singleton';

describe('create and find user ', () => {
  const user = {
    id: '1',
    name: 'test',
    email: 'test@qq.com',
    password: '123456',
    photo: 'test',
    verified: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it.skip('should create new user', async () => {
    prismaMock.user.create.mockResolvedValue(user);

    await expect(createUser(user)).resolves.toEqual(user);
  });
  it('should find the create user', async () => {
    const finduser = {
      id: '1',
      name: 'test',
    };
    await expect(
      findUser({ email: user.email }, { id: true, name: true })
    ).resolves.toEqual(finduser);
  });
  it('should return null when user dosenot exist', async () => {
    await expect(
      findUser({ email: '' }, { id: true, name: true })
    ).resolves.toBeNull();
  });
  it('cant create user with same email', async () => {
    prismaMock.user.create.mockResolvedValue(user);
    await expect(createUser(user)).rejects.toThrowError();
  });
  it('should return all user', async () => {
    const alluser = [
      {
        id: '1',
        name: 'test',
      },
      {
        id: '2',
        name: 'hahaha',
      },
    ];
    prismaMock.user.findMany.mockResolvedValue([user]);
    await expect(findAllUser({ id: true, name: true })).resolves.toEqual(
      alluser
    );
  });
  it('find followers', async () => {});
  it('find followings', async () => {});
});
describe('login and logout', () => {
  it('should login', async () => {});
  it('should logout', async () => {});
});
describe('follow and unfollow', () => {
  it('should follow', async () => {});
  it('should unfollow', async () => {});
});
