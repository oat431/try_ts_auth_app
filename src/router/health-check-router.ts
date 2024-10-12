import { Router } from 'express';
import { HealthCheckController } from '../controller/health-check-controller.js';
import 'reflect-metadata';
import '../config/container.js';
import { container } from 'tsyringe';

const healthCheckRouter = Router();
const controller = container.resolve(HealthCheckController);

healthCheckRouter.get('/', (req, res) => controller.healthCheck(req, res));

healthCheckRouter.get('/ping', (req, res) => controller.ping(req, res));

export default healthCheckRouter;
