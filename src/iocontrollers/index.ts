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
        console.log("socket is coming ",socket)
        socket.on("subscribe",function(room){
            socket.join(room)
        })
        socket.on("message", function(msg){
            io.emit("message", msg);
        });
        
        socket.on("disconnect",function(){
            /**
             * 删除redis的client数据
             *
             */
        })
    })
}
    
