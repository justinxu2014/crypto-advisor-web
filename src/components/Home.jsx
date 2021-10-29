import { useEffect, useState } from "react";
import { socket } from "../socketio/socket";
import MarketTable from "./MarketTable";
import RecTable from "./RecTable";

const Home = () => {
  const [binanceETHBuyPrice, setBinanceETHBuyPrice] = useState(0);
  const [binanceETHSellPrice, setBinanceETHSellPrice] = useState(0);
  const [binanceBTCBuyPrice, setBinanceBTCBuyPrice] = useState(0);
  const [binanceBTCSellPrice, setBinanceBTCSellPrice] = useState(0);
  const [coinbaseETHBuyPrice, setCoinbaseETHBuyPrice] = useState(0);
  const [coinbaseETHSellPrice, setCoinbaseETHSellPrice] = useState(0);
  const [coinbaseBTCBuyPrice, setCoinbaseBTCBuyPrice] = useState(0);
  const [coinbaseBTCSellPrice, setCoinbaseBTCSellPrice] = useState(0);

  const tableCategories = ["BTC", "ETH"];
  const tableContent = [
    [
      "Binance",
      binanceBTCBuyPrice,
      binanceBTCSellPrice,
      binanceETHBuyPrice,
      binanceETHSellPrice,
    ],

    [
      "Coinbase",
      coinbaseBTCBuyPrice,
      coinbaseBTCSellPrice,
      coinbaseETHBuyPrice,
      coinbaseETHSellPrice,
    ],
  ];
  const RecTableContent = [
    [
      "BTC",
      binanceBTCBuyPrice <= coinbaseBTCBuyPrice ? "Binance" : "Coinbase",
      binanceBTCSellPrice >= coinbaseBTCSellPrice ? "Binance" : "Coinbase",
    ],
    [
      "ETH",
      binanceETHBuyPrice <= coinbaseETHBuyPrice ? "Binance" : "Coinbase",
      binanceETHSellPrice >= coinbaseETHSellPrice ? "Binance" : "Coinbase",
    ],
  ];

  useEffect(() => {
    socket.on("update:binance", (data) => {
      if (data.symbol === "ETHBUSD") {
        setBinanceETHBuyPrice(data.buyPrice);
        setBinanceETHSellPrice(data.sellPrice);
      } else {
        setBinanceBTCBuyPrice(data.buyPrice);
        setBinanceBTCSellPrice(data.sellPrice);
      }
    });
    socket.on("update:coinbase", (data) => {
      if (data.symbol === "ETH-USD") {
        setCoinbaseETHBuyPrice(data.buyPrice);
        setCoinbaseETHSellPrice(data.sellPrice);
      } else {
        setCoinbaseBTCBuyPrice(data.buyPrice);
        setCoinbaseBTCSellPrice(data.sellPrice);
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <h1> Crypto Advisor</h1>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "25px" }}
      >
        <RecTable content={RecTableContent} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          margin: "25px",
        }}
      >
        <MarketTable categories={tableCategories} content={tableContent} />
      </div>
    </div>
  );
};
export default Home;
