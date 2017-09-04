

let driver  =  {
    dialect: 'sqlite',
    storage: '../database.sqlite'
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