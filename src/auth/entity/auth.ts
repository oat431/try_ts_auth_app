import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, Relation, ManyToMany, JoinTable } from 'typeorm';
import { RefreshToken } from './refresh-token.js';
import { User } from './user.js';
import { Role } from './role.js';

@Entity('tb_auth')
export class Auth {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ unique: true })
    username?: string;

    @Column()
    password?: string;

    @Column({ unique: true })
    email?: string;

    @Column({ name: 'is_verified', default: false })
    isVerifed?: boolean;

    @Column({ name: 'is_enabled', default: false })
    isEnabled?: boolean;

    @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.auth, { cascade: true })
    refreshTokens?: Relation<RefreshToken[]>;

    @OneToOne(() => User, (user) => user.auth, { cascade: true })
    user?: Relation<User>;

    @ManyToMany(() => Role, (role) => role.auths, { cascade: true })
    @JoinTable({
        name: 'tb_auth_roles', // Custom name for the join table
        joinColumn: { name: 'auth_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
    })
    roles?: Relation<Role[]>;
}
