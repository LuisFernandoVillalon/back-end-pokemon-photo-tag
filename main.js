import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/index_route.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
const mongoDB = process.env.MY_MONGODB;
// eslint-disable-next-line no-use-before-define, no-console
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// Routes
app.use('/api', router);