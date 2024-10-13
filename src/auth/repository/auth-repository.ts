import { datasource } from '../../config/data-source.js';
import { Auth } from '../entity/auth.js';
const authRepository = datasource.getRepository(Auth);
export default authRepository;
