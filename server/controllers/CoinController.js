const express = require("express");

const coinGecko = "https://api.coingecko.com/api/v3/coins";

const getCoins = async (req, res) => {
  const url = new URL(coinGecko + "/markets")

  const params = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: "50",
    page: "1",
    sparkline: false,
  };

  for (let k in params) {
    url.searchParams.append(k, params[k]);
  }

  try {
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => res.send(data));
  } catch (err) {
    res.status(400);
    throw new Error(err);
  }
};

module.exports = {
  getCoins,
};
