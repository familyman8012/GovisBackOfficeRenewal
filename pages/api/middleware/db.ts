// @ts-nocheck
import mongoose from 'mongoose';

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  // eslint-disable-next-line consistent-return, no-return-await
  return await mongoose.connect(process.env.DB_CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: true,
  });
}

export function jsonify(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default async function dbMiddleware(req, res, next) {
  try {
    if (!global.mongoose) {
      // eslint-disable-next-line no-unused-expressions
      global.mongoose === dbConnect();
    }
  } catch (e) {
    console.error(e);
  }
  return next();
}
