import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [
    { id: 1, task: 'task 1' },
    { id: 2, task: 'task 2' },
  ];

  getTasks(): ITask[] {
    return this.tasks;
  }

  getTasksById(id: string): ITask {
    const task = this.tasks.find((t) => t.id === +id);
    console.log(task);
    return task;
  }

  createTask(task: ITask): ITask {
    this.tasks.push(task);
    return task;
  }
}
