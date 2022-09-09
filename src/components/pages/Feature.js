import lavori from "../../assets/lavori.jpg";

export function Feature() {
  return (
      <div className="w-full flex justify-center items-center h-screen">
        <div className="flex justify-center items-center w-8/12">
          <img src={lavori} className="w-3/5" alt="working" />
        </div>
      </div>
    )
}
