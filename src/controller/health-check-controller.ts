import { Request, Response } from 'express';
import HealthCheckDTO from '../payload/resposne/HealthCheckDTO.js';
import HealthCheckRequest from '../payload/request/HealCheckRequest.js';
import ResponseDTO from '../shared/ResponseDTO.js';
import Status from '../shared/Status.js';
import HealthCheckService from '../service/health-check-service.js';

class HealthCheckController {
    constructor(private healthCheckService: HealthCheckService) {}

    public healthCheck(req: Request, res: Response): void {
        const response: ResponseDTO<HealthCheckDTO> = {
            data: this.healthCheckService.healthCheck(),
            code: 200,
            status: Status.SUCCESS,
            error: null,
        };
        res.status(200).json(response);
    }

    public ping(req: Request, res: Response): void {
        const response: ResponseDTO<HealthCheckDTO> = {
            data: this.healthCheckService.ping(),
            code: 200,
            status: Status.SUCCESS,
            error: null,
        };
        res.status(200).json(response);
    }

    public greetSystem(req: Request, res: Response): void {
        const request: HealthCheckRequest = req.body;
        const response: ResponseDTO<HealthCheckDTO> = {
            data: this.healthCheckService.greetSystem(request.message),
            code: 200,
            status: Status.SUCCESS,
            error: null,
        };
        res.status(200).json(response);
    }
}

export default HealthCheckController;
