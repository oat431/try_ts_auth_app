import { Router } from 'express';
import HealthCheckController from '../controller/health-check-controller.js';
import HealthCheckService from '../service/health-check-service-implement.js';

const healthCheckRouter = Router();
const controller: HealthCheckController = new HealthCheckController(new HealthCheckService());

healthCheckRouter.get('/', controller.healthCheck);

healthCheckRouter.get('/ping', controller.ping);

export default healthCheckRouter;
