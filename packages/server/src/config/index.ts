import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
interface CustomConfigProps {
  port: number;
  origin: string;
  dbUrl: string;
  redisUrl:string
}

const customConfig: CustomConfigProps = {
  port: 8000,
  origin: process.env.ORIGIN as unknown as string,
  dbUrl: process.env.DATABASE_URL as unknown as string,
  redisUrl: process.env.REDIS_URL as unknown as string,
  
};

export default customConfig;
