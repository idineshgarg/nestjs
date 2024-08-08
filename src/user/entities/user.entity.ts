import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './user-role.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @OneToMany(() => UserRole, (userRole) => userRole.userId)
  userRoles: UserRole[];
}
