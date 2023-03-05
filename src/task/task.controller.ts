import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private testService: TaskService) {}

  @Get()
  getTasks(): ITask[] {
    return this.testService.getTasks();
  }

  @Get(':id')
  getTasksById(@Param('id') id: string): ITask {
    return this.testService.getTasksById(id);
  }

  @Post()
  createTask(@Body('task') task: ITask): ITask {
    return this.testService.createTask(task);
  }
}
