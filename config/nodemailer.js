import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD, EMAIL_USERNAME } from './env.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD
    }
})