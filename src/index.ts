// core libraries
import express, { urlencoded, json } from 'express';
import 'reflect-metadata';
import db from './config/db.js';
import { createDatabase } from 'typeorm-extension';
import { ensureDB } from './util/createdb.js';
import { DataSource } from 'typeorm';

// application router
import healthCheckRouter from './health-check/router/health-check-router.js';

const SERVER_PORT = process.env.SERVER_PORT || 8080;
const DB_PORT = process.env.DB_PORT || 5432;
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
createDatabase({ ifNotExist: true, options: db });

const initialize = async () => {
    if (process.env.RESTART_DB == 'true') {
        await ensureDB();
    }
    const datasource = new DataSource({
        ...db,
        synchronize: true,
    });
    await datasource.initialize();
    console.log(`Database connected successfully at ${DB_PORT}`);
    app.use('/health-check', healthCheckRouter);
    app.listen(SERVER_PORT, () => {
        console.log(`Server is listening at http://localhost:${SERVER_PORT}`);
    });
};

initialize().catch((err) => {
    console.error('Error initializing app:', err);
    process.exit(1);
});
