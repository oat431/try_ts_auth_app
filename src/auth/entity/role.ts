import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation } from 'typeorm';
import { Auth } from './auth.js';

@Entity('tb_role')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ unique: true })
    name?: string;

    @Column()
    description?: string;

    @ManyToMany(() => Auth, (auth) => auth.roles)
    auths?: Relation<Auth[]>;
}
