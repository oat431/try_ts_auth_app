import { datasource } from '../../config/data-source.js';
import { User } from '../entity/user.js';
const userRepository = datasource.getRepository(User);
export default userRepository;
