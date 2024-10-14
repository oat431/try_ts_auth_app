import { injectable } from 'tsyringe';
import { UserDao } from './user-dao.js';
import { User } from '../entity/user.js';
import userRepository from '../repository/user-repository.js';

@injectable()
export class UserDaoImpl implements UserDao {
    deleteAll(): void {
        userRepository.clear();
    }
    save(user: User): Promise<User> {
        return userRepository.save(user);
    }
    delete(id: string): void {
        userRepository.delete(id);
    }
    findByFirstname(firstname: string): Promise<User | null> {
        return userRepository.findOne({ where: { firstname: firstname } });
    }
    findByLastname(lastname: string): Promise<User | null> {
        return userRepository.findOne({ where: { lastname: lastname } });
    }
}
