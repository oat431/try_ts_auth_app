import { Entity, PrimaryGeneratedColumn, Column, OneToOne, Relation, JoinColumn } from 'typeorm';
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
    @JoinColumn({ name: 'auth_id' })
    auth?: Relation<Auth>;
}
