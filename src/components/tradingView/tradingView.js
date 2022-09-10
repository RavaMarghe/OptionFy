import {
  Ticker,
  AdvancedRealTimeChart,
  MarketOverview,
  MarketData,
  TickerTape,
  ForexHeatMap,
} from "react-ts-tradingview-widgets";
import { Footer } from "../footer/Footer";

function TradingView() {
  return (
    <div>
      <div className="mt-10 mx-12 ">
        <TickerTape colorTheme="dark" />
      </div>
      <div className="mt-6 mx-12 h-96 lg:block hidden">
        <AdvancedRealTimeChart theme="dark" autosize />
      </div>
      <div className="mt-14 mx-12 lg:block hidden">
        <MarketData colorTheme="dark" width="100%" height={400} />
      </div>
      <div className="mt-8 mx-12">
        <MarketOverview
          colorTheme="dark"
          height={400}
          width="100%"
          showFloatingTooltip
        />
      </div>
      <div className="mt-8 mx-12 ">
        <ForexHeatMap colorTheme="dark" autosize />
      </div>
      <div className="mt-8 mx-12 ">
        <Ticker colorTheme="dark" />
      </div>

      <Footer />
    </div>
  );
}

export default TradingView;
