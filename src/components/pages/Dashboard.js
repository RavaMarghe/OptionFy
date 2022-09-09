import { HeaderDashboard } from "../header/HeaderDashboard";
import TradingView from "../tradingView/tradingView";

export function Dashboard() {
  const loggedIn = JSON.parse(localStorage.getItem("currentUser"));
  const userFirstName = loggedIn.firstName;
  const firstNameCapitalized = userFirstName[0].toUpperCase() + userFirstName;

  if (userFirstName) {
    return (
      <div className="bg-gradient-to-t from-violet-900 to-black">
        <HeaderDashboard />

        <h1 className="text-center text-gray-100 text-2xl mt-3">
          {firstNameCapitalized}, welcome to your dashboard!{" "}
        </h1>
        <TradingView />
      </div>
    );
  }
}
