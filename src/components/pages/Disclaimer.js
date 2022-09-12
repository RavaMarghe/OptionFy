import { Header } from "../header/Header";
import ContactUs from "../footer/ContactUs";
import { Footer } from "../footer/Footer";
import DisclaimerContent from "./DisclaimerContent";
const Disclaimer = () => {
  return (
    <div className="bg-black">
      <Header />
      <div className="bg-gradient-to-t from-violet-900 to-black">
        <div>
          <DisclaimerContent />
        </div>
        <Footer />
        <ContactUs />
      </div>
    </div>
  );
};

export default Disclaimer;
