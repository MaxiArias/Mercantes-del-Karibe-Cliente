var webSocketJs = (function() {  
  var ip = "192.168.1.103";
  var websocket = new WebSocket("ws://" + ip + ":8080/Mercantes-del-Karibe/wsServerEndpoint");
  var user;

  var sendMessage = function (message) {   
    websocket.send(JSON.stringify(message));
  }

  var setUser = function (name) {
    user = name;

    //websocket.send(JSON.stringify(jsonMsg));
  }

  function setOnMessage(fn) {
    websocket.onmessage = fn;
  }

  return {
    sendMessage: sendMessage,
    setOnMessage : setOnMessage,
    setUser: setUser
  }
})();