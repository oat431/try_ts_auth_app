// core libraries
import express, { urlencoded, json } from 'express';
import 'reflect-metadata';
import db from './config/db.js';
import { createDatabase } from 'typeorm-extension';
import { datasource } from './config/data-source.js';
import { LoadData } from './util/load-data.js';
import { container } from 'tsyringe';

// application router
import healthCheckRouter from './health-check/router/health-check-router.js';

// ========================================================

// core start app
const SERVER_PORT = process.env.SERVER_PORT || 8080;
const DB_PORT = process.env.DB_PORT || 5432;
const app = express();
const loadData = container.resolve(LoadData);

// express middleware
app.use(urlencoded({ extended: true }));
app.use(json());

// create database if not exist
createDatabase({ ifNotExist: true, options: db });

// register router
app.use('/health-check', healthCheckRouter);

// startup database
datasource
    .initialize()
    .then(async () => {
        app.listen(SERVER_PORT, () => {
            console.log(`Server is listening at http://localhost:${SERVER_PORT}`);
        });
        console.log(`Database connected successfully at ${DB_PORT}`);
        await loadData.loadData();
    })
    .catch((err) => {
        console.error('Error initializing app:', err);
        process.exit(1);
    });
