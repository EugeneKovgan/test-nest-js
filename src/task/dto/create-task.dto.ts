import { IsOptional, IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { Status } from '../task.interface';

export class CreateTaskDto {
  @IsString({ message: 'required message' })
  @IsNotEmpty({ message: 'required message' })
  task: string;

  @IsOptional()
  @IsString({ each: true, message: 'tags mast be string' })
  tags?: string[];

  @IsOptional()
  @IsEnum(Status, { message: 'wrong status' })
  status?: Status;
}
