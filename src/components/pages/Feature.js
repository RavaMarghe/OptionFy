import { useNavigate } from "react-router";
import lavori from "../../assets/lavori.jpg";

export function Feature() {
  const toHome = useNavigate();

  function handleRouting() {
    toHome("/");
  }
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-8/12">
        <button
          type="button"
          onClick={handleRouting}
          className="border-2 p-3 mb-3"
        >
          Back to Homepage
        </button>
        <img src={lavori} className="w-3/5" alt="working" />
      </div>
    </div>
  );
}
