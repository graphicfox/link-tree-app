import express from 'express';
import path from 'node:path';
import { errorHandler } from './middlewares/ErrorHandler';
import AdminRoute from './routes/AdminRoute';
import linkListRouter from './routes/ListRoute';
import ViewRoute from './routes/ViewRoute';
import LoginRoute from './routes/LoginRoute';
import session from 'express-session';

const app = express();

app.use(session({
  secret: 'your-secret-key', // In a real app, use a more secure secret and store it in environment variables
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using https
}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/lists', linkListRouter);

app.use(ViewRoute);
app.use(AdminRoute);
app.use(LoginRoute);

app.use(errorHandler);

export default app;