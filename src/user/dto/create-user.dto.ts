import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
