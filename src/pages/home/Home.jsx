import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from '../../components/Values'
import FAQS from "../../components/FAQS";

import "./home.css";
import Testimonials from "../../components/Testimonials";

function Home() {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values/>
      <FAQS/>
      <Testimonials/>
    </>
  );
}

export default Home;
