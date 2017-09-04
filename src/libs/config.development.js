

let driver  =  {
    dialect: 'mysql',
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "123456",
    name: "yunxiaoxin_db"
}
let redis  = {
    host: '127.0.0.1',
    port : '6379',
    password : 'yunxiaoxin_db',
    db : 9,
    cachedb : 10 ,
    "userttl": 604800,
    "checkcodettl": 900,
}
let http  = {
    port : 80
}
let https  = {
    port : 443
}
export{
    driver,redis ,http ,https
}