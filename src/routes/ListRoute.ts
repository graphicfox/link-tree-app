import { Router } from 'express';
import ListController from '../controllers/ListController';

const linkListRouter = Router();

linkListRouter.get('/', ListController.getLists);
linkListRouter.get('/:id', ListController.getListById);
linkListRouter.post('/', ListController.createList);
linkListRouter.put('/:id', ListController.updateList);
linkListRouter.delete('/:id', ListController.deleteList);

export default linkListRouter;