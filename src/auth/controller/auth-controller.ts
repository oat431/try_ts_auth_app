import { inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { AuthService } from '../service/auth-service.js';
import JWTResponse from '../payload/resposne/JWTResponse.js';
import AuthResponse from '../payload/resposne/AuthResponse.js';
import LoginRequest from '../payload/request/LoginRequest.js';
import RegisterRequest from '../payload/request/RegisterRequest.js';

@injectable()
export class AuthController {
    constructor(@inject('AuthService') private authService: AuthService) {}

    public async login(req: Request, res: Response): Promise<void> {
        const request = req.body as unknown as LoginRequest;
        const response: JWTResponse = await this.authService.login(request);
        res.status(200).json(response);
    }
    public async register(req: Request, res: Response): Promise<void> {
        const request = req.body as unknown as RegisterRequest;
        const response: AuthResponse = await this.authService.register(request);
        res.status(200).json(response);
    }
}
