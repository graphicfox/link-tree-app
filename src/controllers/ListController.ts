import {Request, Response, NextFunction} from 'express';
import {LinkListById} from '../Utilities/LinkListById';

class ListController
{
    public createList = (req: Request, res: Response, next: NextFunction) => {
    
    };
    
    public getLists = (req: Request, res: Response, next: NextFunction) => {
    
    };
    
    public getListById = (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(LinkListById(req.params.id));
        } catch (error) {
            res.status(404).json({message: 'Item not found'});
        }
    };
    
    public deleteList = (req: Request, res: Response, next: NextFunction) => {
    
    };
    
    public updateList = (req: Request, res: Response, next: NextFunction) => {
    
    };
}

export default new ListController();