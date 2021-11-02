import { io } from "socket.io-client";

const config = {
  path: "/feed/",
};

const socket = io(process.env.REACT_APP_API_URL, config);

const connectSocket = () => {
  socket.connect();
};

const disconnectSocket = () => {
  socket.disconnect();
};

socket.on("connect", () => {
  console.log("connected: ", socket.id);
});

socket.on("disconnect", () => {
  console.log("disconnected: ", socket.io);
});

export { socket, connectSocket, disconnectSocket };
