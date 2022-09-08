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
          range="12m"
        />
        <div className="flex justify-center ">
          <TradingViewMarketWidget
            />
        </div>
      </div>
    );
  }
}

export default TradingView;
