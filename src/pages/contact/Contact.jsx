import Head from "../../components/Head"
import HeaderImg from "../../images/header_bg_2.jpg"
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"


import "./contact.css";

function Contact() {
  return <>
  <Head title="Get in Touch" image={HeaderImg}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut ipsam eligendi eveniet, debitis adipisci.
  </Head>
  <section className="contact">
    <div className="container contact__container">
      <div className="contact__wrapper">
        <a href="mailto:gmail@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
        <a href="http://m.me/chemaT" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
        <a href="https://wa.me/+528112550227" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>

      </div>
    </div>
  </section>
  
  
  </>;
}

export default Contact;
