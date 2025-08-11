import { Request, Response } from 'express';
import config from '../config/Config';
import {LinkListById} from '../Utilities/LinkListById';

class ViewController {
    /**
     * Renders the view page and displays the default list.
     * @method GET
     * @param {Request} req
     * @param {Response} res
     */
    public showView(req: Request, res: Response)  {
        return res.render('index', {linkList: LinkListById('default')});
    }

    public showPreview(req: Request, res: Response) {
        return res.render('partials/View', {data: req.body});
    }
}

export default new ViewController();