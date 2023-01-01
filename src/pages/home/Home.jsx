import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from '../../components/Values'
import FAQS from "../../components/FAQS";

import "./home.css";

function Home() {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values/>
      <FAQS/>
    </>
  );
}

export default Home;
