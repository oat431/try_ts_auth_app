import Status from './Status.js';

interface ResponseDTO<T> {
    data: T;
    code: number;
    error?: string | null;
    status: Status;
}

export default ResponseDTO;
