// @ts-nocheck
import nextConnect from 'next-connect';
import dbMiddleware from './db';

export default function createHandler(...middlewares) {
  return nextConnect().use(dbMiddleware, ...middlewares);
}
