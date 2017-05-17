let driver : any =  {
        type : "mysql",
        host : "127.0.0.1",
        port : 3306,
        username : "root",
        password : '123456',
        database : "yun_db"
    }
let redis : any = {
    host: '127.0.0.1',
    port : '6379',
    password : 'yunxiaoxin_db',
    db : 11,
    cachedb : 10,
    "userttl": 604800,
    "checkcodettl": 900,
}
let http : any = {
    port : 80

}
let https : any = {
    port : 443
}
export default {
    driver : driver,
    redis : redis,
    http : http,
    https: https
}