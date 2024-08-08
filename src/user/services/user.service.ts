import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.userRepository.save(createUserDto);
      return this.findOne(user.id);
    } catch (error) {}
  }

  async findAll() {
    try {
      const [users, count] = await this.userRepository.findAndCount();
      console.log(users, count);
      return {
        users,
        count,
      };
    } catch (error) {}
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    await this.userRepository.update(id, { ...updateUserDto });
    return this.findOne(id);
  }

  remove(id: string) {
    return this.userRepository.delete({ id: id });
  }
}
