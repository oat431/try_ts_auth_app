import { injectable } from 'tsyringe';
import { Role } from '../entity/role.js';
import { RoleDao } from './role-dao.js';
import roleRepository from '../repository/role-repository.js';

@injectable()
export class RoleDaoImpl implements RoleDao {
    deleteAll(): void {
        roleRepository.clear();
    }
    save(role: Role): Promise<Role> {
        return roleRepository.save(role);
    }
    delete(id: string): void {
        roleRepository.delete(id);
    }
    findByName(name: string): Promise<Role | null> {
        return roleRepository.findOne({ where: { name: name } });
    }
}
