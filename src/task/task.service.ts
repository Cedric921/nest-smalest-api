import { TaskSchema } from './schemas/task.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { iTask } from './interface/task.interface';
import { TaskDTO } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private taskModel: Model<iTask>) {}
  async getTasks(): Promise<iTask[]> {
    return await this.taskModel.find();
  }

  async addTask(task: TaskDTO): Promise<iTask> {
    const newTask = new this.taskModel({ ...task });
    return await newTask.save();
  }

  async getOneTask(id: string) {
    return await this.taskModel.findById(id);
  }

  async updateTask(id: string, task: TaskDTO) {
    const existTask = await this.taskModel.findById(id);
    if (existTask) return existTask.update(task);
  }

  async deleteTask(id: string) {
    return await this.taskModel.findByIdAndDelete(id);
  }
}
