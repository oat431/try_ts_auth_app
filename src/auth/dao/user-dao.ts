import { User } from '../entity/user.js';

export interface UserDao {
    save(user: User): Promise<User>;
    delete(id: string): void;
    findByFirstname(firstname: string): Promise<User | null>;
    findByLastname(lastname: string): Promise<User | null>;

    deleteAll(): void;
}
