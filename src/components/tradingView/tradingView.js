import {
  TradingViewMarketWidget,
  TradingViewStockChartWidget,
} from "react-tradingview-components";

function TradingView() {
  return (
    <div className="mt-10">
      <TradingViewStockChartWidget symbol="NASDAQ:AAPL" range="12m" />
      <div className="flex justify-center ">
        <TradingViewMarketWidget />
      </div>
    </div>
  );
}

export default TradingView;
