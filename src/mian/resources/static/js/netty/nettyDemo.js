$(function () {
    if (window.WebSocket) {
        NettyDemo.socket = new WebSocket(NettyDemo.SocketUrl);
        NettyDemo.socket.onopen = function () {
            var messageType = $("#messageType").val();
            var cpwInitMessage = new Netty.CpwInitMessage(Netty.userType.company, "1163280750649413632");
            var message = new Netty.CustomerMessage(0, cpwInitMessage);
            NettyDemo.socket.send(JSON.stringify(message));
            console.log("connected....");
        }, NettyDemo.socket.onclose = function () {
            console.log("disconnect...");
        }, NettyDemo.socket.onerror = function () {
            console.log("error...")
        }, NettyDemo.socket.onmessage = function (e) {
            console.log(e);
            receiveMessage(e.data);
        }
    }
});

$("#send").on('click', function () {
    // var message = $("#inputMsg").val();
    var cpwMessage = new Netty.CpwMessage("1", "2", "3", 4, 5, "6");
    var message = new Netty.CustomerMessage(1, cpwMessage);
    console.log(message);
    NettyDemo.socket.send(JSON.stringify(message));
});

function receiveMessage(message) {
    var html = "<p>" + message + "</p>";
    $(".right").append(html);
}