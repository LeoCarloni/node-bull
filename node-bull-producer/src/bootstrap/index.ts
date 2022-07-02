import { loadEnvs } from '../tools/envs.tools';
loadEnvs(`${__dirname}/../../envs/.env-${process.env.NODE_ENV || 'development'}`);