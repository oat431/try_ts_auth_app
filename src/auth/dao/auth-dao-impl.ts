import { Auth } from '../entity/auth.js';
import { AuthDao } from './auth-dao.js';
import authRepository from '../repository/auth-repository.js';
import { injectable } from 'tsyringe';

@injectable()
export class AuthDaoImpl implements AuthDao {
    save(auth: Auth): Promise<Auth> {
        return authRepository.save(auth);
    }
    delete(auth: Auth): void {
        authRepository.delete(auth);
    }
    findByUsername(username: string): Promise<Auth | null> {
        return authRepository.findOne({ where: { username: username } });
    }
    findByEmail(email: string): Promise<Auth | null> {
        return authRepository.findOne({ where: { email: email } });
    }
}
