/**
 * 中心化controller,类似dispatchservlet的作用
 * 接管connection，disconnection， message的事情
 * 分发到各个controller里面进行处理
 * db连接mongodb，redis，mysql，聊天记录放在mongodb里面
 * 
 */
//   https://io.yunxiaoxin.com

import client from "../db/redisDB"
export default (io)=>{
    io.on('connection', function (socket) {
        console.log("socket is coming ",socket.id)
        socket.on("setme",(data)=>{
            console.log("set me ", data)
            client.set("socket_" + socket.id, JSON.stringify(data))
        })
        socket.on("subscribe",function(data){
            console.log("subscribe is comming ", data);
            socket.join(data.roomid)            
        })
        socket.on("msg", function(_msg){
            console.log('msg is ', _msg)
            let user = client.hget(socket.id)
            let msg = {createTime : new Date(),  to : _msg.to, from : user, content : _msg.content}
            //monodb save
            io.to(_msg.to).emit("msg", msg);
        });
        
        socket.on("disconnect",function(){
            console.log(socket.id + " is leaving")
            socket.leave(roomid)
            //client.remove(socket.id)
            /**
             * 删除redis的client数据
             *
             */
        })
    })
}
    
