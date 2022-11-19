import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  addTask(@Body() taskDto: TaskDTO) {
    return this.taskService.addTask(taskDto);
  }

  @Get(':id')
  getOneTask(@Param('id') id: string) {
    return this.taskService.getOneTask(id);
  }

  @Put(':id')
  updateTask(@Body() task: TaskDTO, @Param('id') id: string) {
    return this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
