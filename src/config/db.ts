import 'reflect-metadata';
import { DataSourceOptions } from 'typeorm';
import { Auth } from '../auth/entity/auth.js';
import { RefreshToken } from '../auth/entity/refresh-token.js';
import { Role } from '../auth/entity/role.js';
import { User } from '../auth/entity/user.js';

const db: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Auth, RefreshToken, Role, User],
    synchronize: true,
    logging: false,
};

export default db;
