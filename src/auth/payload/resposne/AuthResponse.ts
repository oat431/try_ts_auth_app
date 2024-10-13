interface AuthResponse {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    birthday: Date;
    roles: string[];
}

export default AuthResponse;
