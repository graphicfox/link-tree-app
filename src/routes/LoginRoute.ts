import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginRouter = Router();

loginRouter.get('/login', LoginController.showLoginForm);
loginRouter.post('/login', LoginController.login);

export default loginRouter;