import express, { Request, Response, NextFunction } from 'express';

import usersRouter from './routes/users';

const app = express();
const PORT = 5000;

//  parse body requests to JSON
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', usersRouter);

//  Error-handling middleware
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});