import {Router} from 'express';
import ViewController from '../controllers/ViewController';

const ViewRoute = Router();

ViewRoute.get('/', ViewController.showView);
ViewRoute.post('/preview', ViewController.showPreview);

export default ViewRoute;