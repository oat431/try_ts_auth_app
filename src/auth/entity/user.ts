import { Entity, PrimaryGeneratedColumn, Column, OneToOne, Relation } from 'typeorm';
import { Auth } from './auth.js';

@Entity('tb_user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    firstname?: string;

    @Column()
    lastname?: string;

    @Column({ type: 'date' })
    birthday?: Date;

    @OneToOne(() => Auth, (auth) => auth.user)
    auth?: Relation<Auth>;
}
