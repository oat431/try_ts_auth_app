import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { Auth } from './auth.js';

@Entity('tb_refresh_token')
export class RefreshToken {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({
        generated: 'uuid',
    })
    token?: string;

    @Column({
        name: 'exp_date',
        type: 'timestamp',
    })
    expDate?: Date;

    @Column({
        name: 'is_revoked',
        default: false,
    })
    isRevoke?: boolean;

    @ManyToOne(() => Auth, (auth) => auth.refreshTokens)
    auth?: Relation<Auth>;
}
