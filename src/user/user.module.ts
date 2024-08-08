import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { UserRole } from './entities/user-role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, UserRole])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
