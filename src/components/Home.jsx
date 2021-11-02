import styled from "styled-components";
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
    <HomeContainer>
      <Title style={{ marginTop: "25px" }}>
        <h1> Crypto Advisor</h1>
      </Title>
      <Section>
        <RecTable content={RecTableContent} />
      </Section>
      <Section>
        <MarketTable categories={tableCategories} content={tableContent} />
      </Section>
    </HomeContainer>
  );
};
export default Home;

const HomeContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0px 25px 0px 25px",
  height: "100vh",
});
const Title = styled.div({
  marginTop: "25px",
});
const Section = styled.div({
  display: "flex",
  justifyContent: "center",
  width: "80vw",
  margin: "25px",
});
