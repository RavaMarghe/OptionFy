import { HeaderDashboard } from "../header/HeaderDashboard";

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
      <div>
        <HeaderDashboard />

        <h1 className="text-center">
          {userFirstName}, welcome to your dashboard{" "}
        </h1>
      </div>
    );
  }
}
