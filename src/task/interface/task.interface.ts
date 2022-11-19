import { ObjectId } from 'mongoose';

export interface iTask {
  _id: ObjectId;
  title: string;
  description: string;
}
