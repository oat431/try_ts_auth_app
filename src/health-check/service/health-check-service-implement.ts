import { injectable } from 'tsyringe';
import HealthCheckDTO from '../payload/resposne/HealthCheckDTO.js';
import { HealthCheckService } from './health-check-service.js';

@injectable()
export class HealthCheckServiceImpl implements HealthCheckService {
    public healthCheck(): HealthCheckDTO {
        const message: HealthCheckDTO = {
            message: 'Server is up and running',
        };
        return message;
    }
    public ping(): HealthCheckDTO {
        const message: HealthCheckDTO = {
            message: 'pong',
        };
        return message;
    }
    public greetSystem(message: string): HealthCheckDTO {
        const messageDTO: HealthCheckDTO = {
            message: `Hello, ${message}`,
        };
        return messageDTO;
    }
}
