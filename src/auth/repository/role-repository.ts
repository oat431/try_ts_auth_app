import { datasource } from '../../config/data-source.js';
import { Role } from '../entity/role.js';
const roleRepository = datasource.getRepository(Role);
export default roleRepository;
