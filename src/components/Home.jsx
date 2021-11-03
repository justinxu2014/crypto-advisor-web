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

  const initBinanceHandler = () => {
    socket.on("update:binance", (data) => {
      if (data.symbol === "ETHBUSD") {
        setBinanceETHBuyPrice(data.buyPrice);
        setBinanceETHSellPrice(data.sellPrice);
      } else {
        setBinanceBTCBuyPrice(data.buyPrice);
        setBinanceBTCSellPrice(data.sellPrice);
      }
    });
  };
  const initCoinbaseHandler = () => {
    socket.on("update:coinbase", (data) => {
      if (data.symbol === "ETH-USD") {
        setCoinbaseETHBuyPrice(data.buyPrice);
        setCoinbaseETHSellPrice(data.sellPrice);
      } else {
        setCoinbaseBTCBuyPrice(data.buyPrice);
        setCoinbaseBTCSellPrice(data.sellPrice);
      }
    });
  };

  useEffect(() => {
    initBinanceHandler();
    initCoinbaseHandler();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="mt-25px">
        <h1 className="text-2xl my-5"> Crypto Advisor</h1>
      </div>
      <div className="flex justify-center w-80vw m-25px">
        <RecTable content={RecTableContent} />
      </div>
      <div className="flex justify-center w-80vw m-25px">
        <MarketTable categories={tableCategories} content={tableContent} />
      </div>
    </div>
  );
};
export default Home;
