$(function () {
    if (window.WebSocket) {
        NettyDemo.socket = new WebSocket(NettyDemo.SocketUrl);
        NettyDemo.socket.onopen = function () {
            NettyDemo.socket.send("你是个麻瓜哦");
            console.log("connected....");
        }, NettyDemo.socket.onclose = function () {
            console.log("disconnect...");
        }, NettyDemo.socket.onerror = function () {
            console.log("error...")
        }, NettyDemo.socket.onmessage = function (e) {
            console.log(e);
        }
    }
});

$("#send").on('click', function () {
    var message = $("#inputMsg").val();
    console.log(message);
    NettyDemo.socket.send(message);
});