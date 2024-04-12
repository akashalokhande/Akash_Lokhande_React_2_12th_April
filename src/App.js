import React, { useState, useEffect } from "react";
import TableRow from "./Componenet/TableRow";
import axios from "axios";
import "./App.css";
import { RingLoader } from "react-spinners";

function App() {
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setCoinData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading)
    return (
      <div className="loader-container">
        <div className="loader">
          <RingLoader color={"#36D7B7"} loading={loading} size={150} />
        </div>
      </div>
    );
  

  return (
    <div className="container">
      <h1>Crypto Market</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((coin, index) => (
            <TableRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
