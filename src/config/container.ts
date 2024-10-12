import 'reflect-metadata';
import { container } from 'tsyringe';
import { HealthCheckServiceImpl } from '../service/health-check-service-implement.js';
import { HealthCheckService } from '../service/health-check-service.js';

container.register<HealthCheckService>('HealthCheckService', HealthCheckServiceImpl);
