import 'reflect-metadata';
import { container } from 'tsyringe';
import { HealthCheckServiceImpl } from '../health-check/service/health-check-service-implement.js';
import { HealthCheckService } from '../health-check/service/health-check-service.js';

import { AuthDaoImpl } from '../auth/dao/auth-dao-impl.js';
import { AuthDao } from '../auth/dao/auth-dao.js';
import { AuthServiceImpl } from '../auth/service/auth-service-impl.js';
import { AuthService } from '../auth/service/auth-service.js';

container.register<HealthCheckService>('HealthCheckService', HealthCheckServiceImpl);

container.register<AuthDao>('AuthDao', AuthDaoImpl);
container.register<AuthService>('AuthService', AuthServiceImpl);
