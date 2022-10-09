import jwt, { SignOptions } from 'jsonwebtoken';
import customConfig from '../config';
type PrivateKey = 'accessTokenPrivateKey' | 'refreshTokenPrivateKey';
type PublicKey = 'accessTokenPublicKey' | 'refreshTokenPublicKey';
export const signJwt = (
  payload: Object,
  key: PrivateKey,
  options: SignOptions
) => {
  const privateKey = Buffer.from(customConfig[key], 'base64').toString('ascii');
  return jwt.sign(payload, privateKey, {
    ...options,
    algorithm: 'RS256',
  });
};

export const verifyJwt = <T>(token: string, key: PublicKey): T | null => {
  try {
    const publicKey = Buffer.from(customConfig[key], 'base64').toString(
      'ascii'
    );
    return jwt.verify(token, publicKey) as T;
  } catch (error) {
    console.log(error);
    return null;
  }
};
