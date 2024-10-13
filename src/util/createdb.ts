import { createDatabase } from 'typeorm-extension';
import db from '../config/db.js';

export const ensureDB = async () => {
    try {
        await createDatabase({
            ifNotExist: true,
            options: db,
            synchronize: true,
        });
        console.log('Database created successfully');
    } catch (err) {
        console.error('Error creating db:', err);
        process.exit(1);
    }
};
