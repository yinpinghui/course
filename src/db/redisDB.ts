import * as redis from 'redis'
import config from '../config';
import * as Promise from 'bluebird';

const redisAsync: any = Promise.promisifyAll(redis);
Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

let client:any ;
client = client || redis.createClient({
    host:config.redis.host,
    port:config.redis.port,
    db : config.redis.cachedb,
    password : config.redis.password,
    prefix : 'ca'
});
client.on("connect",function(){
    console.log("connection should show only once")
})
console.log("this should show only once")
export default client
