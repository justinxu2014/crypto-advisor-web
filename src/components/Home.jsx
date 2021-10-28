import { useEffect, useState } from "react";
import { socket } from "../socketio/socket";

const Home = () => {
  const [binanceETHBuyPrice, setBinanceETHBuyPrice] = useState(0);
  const [binanceETHSellPrice, setBinanceETHSellPrice] = useState(0);
  const [binanceBTCBuyPrice, setBinanceBTCBuyPrice] = useState(0);
  const [binanceBTCSellPrice, setBinanceBTCSellPrice] = useState(0);
  const [coinbaseETHBuyPrice, setCoinbaseETHBuyPrice] = useState(0);
  const [coinbaseETHSellPrice, setCoinbaseETHSellPrice] = useState(0);
  const [coinbaseBTCBuyPrice, setCoinbaseBTCBuyPrice] = useState(0);
  const [coinbaseBTCSellPrice, setCoinbaseBTCSellPrice] = useState(0);

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
    <div style={{ margin: "10px" }}>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "10px" }}>
          <h1>Binance</h1>
          <h2>ETH</h2>
          <div>
            buy: ${binanceETHBuyPrice}
            <br />
            sell: ${binanceETHSellPrice}
          </div>
          <h2>BTC</h2>
          buy: ${binanceBTCBuyPrice} <br />
          sell: ${binanceBTCSellPrice}
        </div>
        <div style={{ margin: "10px" }}>
          <h1>Coinbase</h1>
          <h2>ETH</h2>
          <div>
            buy: {coinbaseETHBuyPrice} <br />
            sell: {coinbaseETHSellPrice}
          </div>
          <h2>BTC</h2>
          buy: {coinbaseBTCBuyPrice} <br />
          sell: {coinbaseBTCSellPrice}
        </div>
      </div>
      <div>
        <h1>Recommendations</h1>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px" }}>
            <h2>ETH</h2>
            <div>
              Buy:{" "}
              {binanceETHBuyPrice <= coinbaseETHBuyPrice
                ? "Binance"
                : "Coinbase"}
              <br />
              Sell:{" "}
              {binanceETHSellPrice >= coinbaseETHSellPrice
                ? "Binance"
                : "Coinbase"}
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <h2>BTC</h2>
            <div>
              Buy:{" "}
              {binanceBTCBuyPrice <= coinbaseBTCBuyPrice
                ? "Binance"
                : "Coinbase"}
              <br />
              Sell:{" "}
              {binanceBTCSellPrice >= coinbaseBTCSellPrice
                ? "Binance"
                : "Coinbase"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
