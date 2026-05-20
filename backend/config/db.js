import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoMemoryServer;

const startMemoryServer = async () => {
  if (!mongoMemoryServer) {
    mongoMemoryServer = await MongoMemoryServer.create();
  }

  return mongoMemoryServer.getUri();
};

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (uri) {
    try {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB URI from environment.');
      return;
    } catch (error) {
      console.error('Primary MongoDB connection failed:', error.message);
    }
  }

  const memoryUri = await startMemoryServer();
  await mongoose.connect(memoryUri);
  console.log('Connected to in-memory MongoDB instance. Data will not persist after shutdown.');
};
