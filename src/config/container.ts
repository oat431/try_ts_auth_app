import 'reflect-metadata';
import { container } from 'tsyringe';
import { HealthCheckServiceImpl } from '../health-check/service/health-check-service-implement.js';
import { HealthCheckService } from '../health-check/service/health-check-service.js';

container.register<HealthCheckService>('HealthCheckService', HealthCheckServiceImpl);
