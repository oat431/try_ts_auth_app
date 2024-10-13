import { datasource } from '../../config/data-source.js';
import { RefreshToken } from '../entity/refresh-token.js';
const refreshTokenRepository = datasource.getRepository(RefreshToken);
export default refreshTokenRepository;
