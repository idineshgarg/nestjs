import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
