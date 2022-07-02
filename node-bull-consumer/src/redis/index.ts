import Redis from 'ioredis';
import configs from '../configs';

export default class RedisCli{

    private static instance: RedisCli;
    public static getInsance(): RedisCli {
        if(!RedisCli.instance){
            RedisCli.instance = new RedisCli();
        }
        return RedisCli.instance;
    }

    private redis: any;

    private constructor(){
        this.redis = new Redis(configs.redis);
    }

    async getJson(key: string){
        const redisKey = await this.redis.get(key);
        if(redisKey){
            return JSON.parse(redisKey);
        }
    }

    async setJson(key: string, value){
        await this.redis.set(key, JSON.stringify(value));
    }
}