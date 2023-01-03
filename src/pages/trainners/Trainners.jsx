import Head from "../../components/Head";
import HeaderImg from "../../images/header_bg_5.jpg"
import {trainers} from "../../data"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import Trainner from "../../components/Trainner";


import "./trainners.css";

function Trainners() {
  return <>
    <Head title="TRAINNERS" image={HeaderImg}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, necessitatibus odio ex at natus rem. Non libero labore sed accusamus?
    </Head>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials})=>{
            <Trainner key={id} image={image} name={name} job={job} socials={[
              {icon: <BsInstagram/>, link: socials[0]},
              {icon: <AiOutlineTwitter/>, link: socials[1]},
              {icon: <FaFacebookF/>, link: socials[2]},
              {icon: <FaLinkedinIn/>, link: socials[3]},

            ]}/>
          })
        }
      </div>
    </section>
  
  </>;
}

export default Trainners;
