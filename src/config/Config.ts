import dotenv from 'dotenv';

dotenv.config();

interface Config {
    port: number;
    nodeEnv: string;
    password: string;
}

const config: Config = {
    port: Number(process.env.APP_PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    password: process.env.APP_PASSWORD || 'admin',
};

export default config;