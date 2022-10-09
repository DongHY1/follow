import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
interface CustomConfigProps {
  port: number;
  origin: string;
  dbUrl: string;
  redisUrl: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
  accessTokenPrivateKey: string;
  accessTokenPublicKey: string;
  refreshTokenPrivateKey: string;
  refreshTokenPublicKey: string;
  redisCacheExpiresIn: number;
}

const customConfig: CustomConfigProps = {
  port: 8000,
  accessTokenExpiresIn: 15,
  refreshTokenExpiresIn: 60,
  redisCacheExpiresIn: 60,
  accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
  accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY as string,
  refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY as string,
  refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY as string,
  origin: process.env.ORIGIN as unknown as string,
  dbUrl: process.env.DATABASE_URL as unknown as string,
  redisUrl: process.env.REDIS_URL as unknown as string,
};

export default customConfig;
