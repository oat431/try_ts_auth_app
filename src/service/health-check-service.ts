import HealthCheckDTO from '../payload/resposne/HealthCheckDTO.js';

export interface HealthCheckService {
    healthCheck(): HealthCheckDTO;
    ping(): HealthCheckDTO;
    greetSystem(message: string): HealthCheckDTO;
}
