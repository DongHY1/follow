import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import customConfig from './config';
import connectDB from './utils/prisma';
import cookieParser from 'cookie-parser';
import { appRouter } from './router';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { createContext, createRouter } from './utils/router';
process.on('uncaughtException', (err) => {
  console.log(err);
});

dotenv.config({ path: path.join(__dirname, './.env') });
const app = express();
if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use(cookieParser());
app.use(
  cors({
    origin: [customConfig.origin, 'http://localhost:3000'],
    credentials: true,
  })
);

app.use(
  '/api/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

const port = customConfig.port;
app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);

  // CONNECT DB
  connectDB();
});
