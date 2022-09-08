import { HeaderDashboard } from "../header/HeaderDashboard";
import TradingView from "../tradingView/tradingView";

export function Dashboard() {
  const loggedIn = JSON.parse(localStorage.getItem("currentUser"));
  const userFirstName = loggedIn.firstName;

  /*   async function getUserInfo() {
    const response = await fetch("http://localhost:8080/api/test/user");
    const mydata = await response.json();
    console.log(mydata);
  } */
  if (userFirstName) {
    return (
      <div className="bg-gradient-to-t from-violet-900 to-black">
        <HeaderDashboard />

        <h1 className="text-center text-gray-100 text-2xl">
          {userFirstName}, welcome to your dashboard!{" "}         
        </h1>
        <TradingView />
      </div>
    );
  }
}
