import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from '../../components/Values'
import FAQS from "../../components/FAQS";

import "./home.css";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values/>
      <FAQS/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default Home;
