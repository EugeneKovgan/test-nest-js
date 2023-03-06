import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ValidationPipe } from '@nestjs/common/pipes';

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

  @UsePipes(new ValidationPipe())
  @Post()
  createTask(@Body() task: CreateTaskDto): ITask {
    return this.testService.createTask(task);
  }
}
