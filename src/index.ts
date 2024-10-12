import express, { urlencoded, json } from 'express';

// router
import healthCheckRouter from './router/health-check-router.js';

const port = 8080;
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

app.use('/health-check', healthCheckRouter);
