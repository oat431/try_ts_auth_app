import HealthCheckDTO from '../payload/resposne/HealthCheckDTO.js';

interface HealthCheckService {
    healthCheck(): HealthCheckDTO;
    ping(): HealthCheckDTO;
    greetSystem(message: string): HealthCheckDTO;
}

export default HealthCheckService;
