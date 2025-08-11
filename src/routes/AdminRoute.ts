import {Router} from 'express';
import AdminController from '../controllers/AdminController';

const AdminRoute = Router();

AdminRoute.get('/admin', AdminController.showAdmin);
AdminRoute.post('/admin', AdminController.updateAdmin);

export default AdminRoute;