import { HeaderDashboard } from "../header/HeaderDashboard";

export function Dashboard() {
  const loggedIn = JSON.parse(localStorage.getItem("currentUser"));
  const userEmail = loggedIn.email;

  /*   async function getUserInfo() {
    const response = await fetch("http://localhost:8080/api/test/user");
    const mydata = await response.json();
    console.log(mydata);
  } */
  if (userEmail) {
    return (
      <div>
        <HeaderDashboard />

        <h1 className="text-center">{userEmail}, welcome to your dashboard </h1>
      </div>
    );
  }
}
