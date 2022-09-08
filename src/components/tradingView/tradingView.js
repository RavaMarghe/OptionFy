import React, { Component } from "react";

import {
  TradingViewMarketWidget,
  TradingViewStockChartWidget,
} from "react-tradingview-components";

class TradingView extends Component {
  render() {
    return (
      <div>
        <TradingViewStockChartWidget
          symbol="NASDAQ:AAPL"
          theme="Dark"
          range="12m"
        />
        <TradingViewMarketWidget
          symbol="NASDAQ:AAPL"
          theme="Dark"
          range="12m"
        />
      </div>
    );
  }
}

export default TradingView;
