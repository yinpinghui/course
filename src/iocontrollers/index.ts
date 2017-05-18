/**
 * 中心化controller,类似dispatchservlet的作用
 * 接管connection，disconnection， message的事情
 * 分发到各个controller里面进行处理
 * db连接mongodb，redis，mysql，聊天记录放在mongodb里面
 * 
 */
//   https://io.yunxiaoxin.com
export default (io)=>{
    io.on('connection', function (socket) {
        console.log("socket is coming ",socket.id)
        socket.on("subscribe",function(room){
            socket.join(room)
        })
        socket.on("msg", function(msg){
            console.log('msg is ', msg)
            io.emit("msg", msg);
        });
        
        socket.on("disconnect",function(){
            console.log(socket.id + " is leaving")
            /**
             * 删除redis的client数据
             *
             */
        })
    })
}
    
