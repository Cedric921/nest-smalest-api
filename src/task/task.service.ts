import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTasks() {
    return { tasks: [] };
  }

  addTask(task: any) {
    return { message: 'task added', task };
  }

  getOneTask(id: string) {
    return { message: 'singleTask', id };
  }

  updateTask(id: string, task: any) {
    return { message: 'update task', id, task };
  }

  deleteTask(id: string) {
    return { message: 'task deleted', id };
  }
}
