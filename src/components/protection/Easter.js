import EasterEgg from "../../assets/EasterEgg.svg";

export function Easter() {
  const loggedIn = JSON.parse(localStorage.getItem("currentUser"));
  const easterEggAcces = loggedIn.email;

  return (
    easterEggAcces === "easter@egg.com" && (
      <div className="w-full flex justify-center items-center h-screen">
        <div className="flex justify-center items-center w-8/12">
          <img src={EasterEgg} className="w-3/5" alt="egg" />
        </div>
      </div>
    )
  );
}
