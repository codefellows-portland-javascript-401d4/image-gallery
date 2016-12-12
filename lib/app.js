import express from 'express';
import gallery from './gallery-routes';
import errorHandler from './error-handler';

const app = express();

app.use('/api/gallery', gallery);
app.use(errorHandler);

export default app;