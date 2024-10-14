import 'reflect-metadata';
import { container } from 'tsyringe';
import { HealthCheckServiceImpl } from '../health-check/service/health-check-service-implement.js';
import { HealthCheckService } from '../health-check/service/health-check-service.js';

import { AuthDaoImpl } from '../auth/dao/auth-dao-impl.js';
import { AuthDao } from '../auth/dao/auth-dao.js';
import { AuthServiceImpl } from '../auth/service/auth-service-impl.js';
import { AuthService } from '../auth/service/auth-service.js';
import { RoleDao } from '../auth/dao/role-dao.js';
import { RoleDaoImpl } from '../auth/dao/role-dao-impl.js';
import { UserDao } from '../auth/dao/user-dao.js';
import { UserDaoImpl } from '../auth/dao/user-dao-impl.js';

container.register<HealthCheckService>('HealthCheckService', HealthCheckServiceImpl);

container.register<AuthDao>('AuthDao', AuthDaoImpl);
container.register<AuthService>('AuthService', AuthServiceImpl);

container.register<RoleDao>('RoleDao', RoleDaoImpl);

container.register<UserDao>('UserDao', UserDaoImpl);
