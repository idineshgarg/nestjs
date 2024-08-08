import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './user-role.entity';

@Entity({ name: 'role' })
export class Role {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 100, unique: true })
  name: string;

  @OneToMany(() => UserRole, (userRole) => userRole.roleId)
  userRoles: UserRole[];
}
