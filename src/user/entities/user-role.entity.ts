import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Role } from './role.entity';

@Entity({ name: 'user_role' })
export class UserRole {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: string;

  @ManyToOne((type) => Role, (role) => role.userRoles)
  @Column({ name: 'role_id', type: 'bigint' })
  roleId: string;

  @ManyToOne((type) => User, (user) => user.userRoles)
  @Column({ name: 'user_id', type: 'bigint' })
  userId: string;
}
