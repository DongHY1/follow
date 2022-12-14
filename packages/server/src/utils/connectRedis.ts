import { createClient } from 'redis';
import customConfig from '../config';
const redisClient = createClient({
  url: customConfig.redisUrl
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('๐ Redis client connected...');
    redisClient.set(
      'tRPC',
      '๐๐Welcome to tRPC with React.js, Express and Typescript!'
    );
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

connectRedis();

redisClient.on('error', (err) => console.log(err));

export default redisClient;
