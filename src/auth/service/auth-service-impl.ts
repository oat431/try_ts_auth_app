import { inject, injectable } from 'tsyringe';
import LoginRequest from '../payload/request/LoginRequest.js';
import RegisterRequest from '../payload/request/RegisterRequest.js';
import AuthResponse from '../payload/resposne/AuthResponse.js';
import JWTResponse from '../payload/resposne/JWTResponse.js';
import { AuthService } from './auth-service.js';
import { AuthDao } from '../dao/auth-dao.js';

@injectable()
export class AuthServiceImpl implements AuthService {
    constructor(@inject('AuthDao') private authDao: AuthDao) {}
    login(request: LoginRequest): Promise<JWTResponse> {
        console.log('Login request: ', request);
        throw new Error('Method not implemented.');
    }
    register(request: RegisterRequest): Promise<AuthResponse> {
        console.log('Login request: ', request);
        throw new Error('Method not implemented.');
    }
}
