import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Sulamita', email: 'sulamita@teste.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Sulamita', 
                email: 'sulamita@teste.com' },
            message: { 
                subject: 'Email teste', 
                body: 'teste' }
        });

        return res.send();
    }
};

