import {Header} from "../../components/header/Header"
import Hero from "../../components/header/Hero";
import { BodyContent } from "../../components/body/BodyContent";
import ContactUs from "../../components/footer/ContactUs";
import Pricing from "../../components/footer/Pricing";
import { Footer } from "../../components/footer/Footer";

export function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <div className="bg-gradient-to-t from-violet-900 to-black">
        <BodyContent />
        <Pricing />
        <Footer />
        <ContactUs />
      </div>
    </div>
  );
}
