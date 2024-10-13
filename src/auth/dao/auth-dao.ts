import { Auth } from '../entity/auth.js';

export interface AuthDao {
    save(auth: Auth): Promise<Auth>;
    delete(auth: Auth): void;
    findByUsername(username: string): Promise<Auth | null>;
    findByEmail(email: string): Promise<Auth | null>;
}
