import { Request, Response } from 'express';
import config from '../config/Config';
import crypto from 'crypto';

class LoginController {
    /**
     * Renders the login form.
     * @method GET
     * @param {Request} req
     * @param {Response} res
     */
    public showLoginForm(req: Request, res: Response) {
        res.render('admin/Login.ejs');
    }

    /**
     * Handles the login attempt.
     * @method POST
     * @param {Request} req
     * @param {Response} res
     */
    public login(req: Request, res: Response) {
        const { password } = req.body;

        // convert password to md5 and compare with config.password
        const hashedPassword = crypto
            .createHash('md5')
            .update(password || '')
            .digest('hex');
        
        if (password && hashedPassword === config.password) {
            // @ts-ignore
            req.session.loggedin = true;
            res.redirect('/admin');
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    }
}

export default new LoginController();