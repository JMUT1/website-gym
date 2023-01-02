import Head from "../../components/Head";
import HeaderImg from "../../images/header_bg_1.jpg"
import StoryImg from "../../images/about1.jpg"
import MissionImg from "../../images/about2.jpg"
import VisionImg from "../../images/about3.jpg"
import "./about.css"



import "./about.css";

function About() {
  return <>
  <Head title="About Us" image={HeaderImg}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, temporibus!
  </Head>

  {/* OUR STORY */}
  <section className="about__story">
    <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImg} alt="Our story Img" />
      </div>
      <div className="about__section-content">
        <h1>Our Story</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus in praesentium magnam at aperiam? Pariatur nam quidem neque iure et, illo itaque ipsam, ducimus veniam libero voluptatem assumenda cumque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid dolor adipisci similique laudantium nesciunt odio minus harum illum eveniet!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, quas.</p>
      </div>
    </div>
  </section>

{/* OUR VISION */}
<section className="about__vision">
    <div className="container about__vision-container">
      <div className="about__section-content">
        <h1>Our Vision</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus in praesentium magnam at aperiam? Pariatur nam quidem neque iure et, illo itaque ipsam, ducimus veniam libero voluptatem assumenda cumque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid dolor adipisci similique laudantium nesciunt odio minus harum illum eveniet!</p>
      </div>
      <div className="about__section-image">
        <img src={MissionImg} alt="Our mission Img" />
      </div>
    </div>
  </section>  
  {/* OUT VISION */}

  <section className="about__mission">
    <div className="container about__mission-container">
      <div className="about__section-image">
        <img src={VisionImg} alt="Our vision Img" />
      </div>
      <div className="about__section-content">
        <h1>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus in praesentium magnam at aperiam? Pariatur nam quidem neque iure et, illo itaque ipsam, ducimus veniam libero voluptatem assumenda cumque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid dolor adipisci similique laudantium nesciunt odio minus harum illum eveniet!</p>
      </div>
    </div>
  </section>  

  </>;
}

export default About;
