import { Role } from '../entity/role.js';

export interface RoleDao {
    deleteAll(): void;
    save(role: Role): Promise<Role>;
    delete(id: string): void;
    findByName(name: string): Promise<Role | null>;
}
