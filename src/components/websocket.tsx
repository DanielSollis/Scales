import { Button } from "react-bootstrap";

var socket = new WebSocket("ws://localhost:8080/ws");

const Connect = function () {
  console.log("opening connection");

  socket.onopen = function () {
    console.log("connection successfull");
  };

  socket.onmessage = function (msg: Event) {
    console.log("message", msg);
  };

  socket.onclose = function () {
    console.log("connection closed");
  };

  socket.onerror = function (error) {
    console.log("error: ", error);
  };
};

const sendMsg = function (msg: string) {
  console.log("sending message: ", msg);
  socket.send(msg);
};

const send = function () {
  sendMsg("Hello World");
};

const SocketButton = function () {
  return <Button onClick={send}>Socket</Button>;
};

export { Connect, SocketButton };
