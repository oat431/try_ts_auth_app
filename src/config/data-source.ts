import { DataSource } from 'typeorm';
import 'reflect-metadata'; // Ensures TypeORM metadata is available
import db from '../config/db.js'; // Your db config

let datasource: DataSource;

const createDataSource = async () => {
    if (!datasource) {
        datasource = new DataSource({
            ...db,
            synchronize: true, // Set true for dev; false in production
        });
        await datasource.initialize();
    }
    return datasource;
};

export { datasource, createDataSource };
