import { Request, Response } from 'express';
import * as fs from 'fs';
import path from 'path';

class AdminController {
    /**
     * Renders the admin page or redirects if not logged in.
     * @method GET
     * @param {Request} req
     * @param {Response} res
     */
    public showAdmin(req: Request, res: Response)  {
        // @ts-ignore
        if (req.session.loggedin) {
            const json = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'default.json')).toString());
            res.render('admin/Admin', {
                data: json
            });
        } else {
            res.redirect('/login');
        }
    }

    /**
     * Updates the admin data.
     * @method POST
     * @param {Request} req
     * @param {Response} res
     */
    public updateAdmin(req: Request, res: Response) {
        // @ts-ignore
        if (!req.session.loggedin) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        
        const { id, links, ...otherFields } = req.body;
        const processedLinks = (links || []).map((link: any, index: number) => ({
            ...link,
            id: index
        }));

        const data = {
            id,
            ...otherFields,
            links: processedLinks
        };

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'default.json'), JSON.stringify(data, null, 4));
        res.status(200).send({ message: 'Data saved successfully' });
    }
}

export default new AdminController();