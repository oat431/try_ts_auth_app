import LoginRequest from '../payload/request/LoginRequest.js';
import RegisterRequest from '../payload/request/RegisterRequest.js';
import AuthResponse from '../payload/resposne/AuthResponse.js';
import JWTResponse from '../payload/resposne/JWTResponse.js';

export interface AuthService {
    login(request: LoginRequest): Promise<JWTResponse>;
    register(request: RegisterRequest): Promise<AuthResponse>;
}
