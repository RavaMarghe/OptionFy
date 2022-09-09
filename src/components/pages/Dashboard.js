import { HeaderDashboard } from "../header/HeaderDashboard";
import TradingView from "../tradingView/tradingView";

export function Dashboard() {
  const loggedIn = JSON.parse(localStorage.getItem("currentUser"));
  const userFirstName = loggedIn.firstName;
  const firstNameCapitalized =
    userFirstName[0].toUpperCase() + userFirstName.slice(1);

  if (userFirstName) {
    return (
      <div className="bg-gradient-to-t from-violet-900 to-black">
        <HeaderDashboard />

        <p className="text-center text-gray-100 mt-3 text-sm md:text-xl">
          {firstNameCapitalized}, welcome to your dashboard!{" "}
        </p>
        <TradingView />
      </div>
    );
  }
}
