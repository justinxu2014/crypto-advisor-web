import { io } from "socket.io-client";

const config = {
  path: "/feed/",
};

const socket = io(process.env.REACT_APP_API_URL, config);

const connectSocket = () => {
  socket.connect();
};

socket.on("connect", () => {
  console.log("connected: ", socket.id);
});

socket.on("disconnect", () => {
  console.log("disconnected: ", socket.io);
});

// socket.on("update:binance", (data) => {
//   if (data.symbol == "ETHBUSD") {
//     binanceETHBuyPrice = data.buyPrice;
//     binanceETHSellPrice = data.sellPrice;
//   }
// });

export { socket, connectSocket };
