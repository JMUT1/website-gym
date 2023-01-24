import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/ ">
                    <img className="logo" src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ullam.
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                    <a href="https://instagram.com" target='_blank' rel="noreferrer noopner"><AiFillInstagram/></a>
                    <a href="https://twitter.com" target='_blank' rel="noreferrer noopner"><AiOutlineTwitter/></a>

                </div>
            </article>
            <article>
                <h4>PermaLinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainners</Link>
                <Link to="/gallery">Galery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            {/* <article>
                <h4>Insights</h4>
                <Link to="/about">Blog</Link>
                <Link to="/plans">Case studies</Link>
                <Link to="/trainers">Events</Link>
                <Link to="/gallery">Comunities</Link>
                <Link to="/contact">FAQs</Link>
            </article> */}
            <article>
                <h4>Get in Touch</h4>
                <Link to="/about">Contact us</Link>
                <Link to="/plans">Support</Link>

            </article>
        </div>
            <div className="footer__copyright">
                <small>2023 Chema Torres &copy; All Rigths Reserved</small>
            </div>
    

    </footer>
  )
}

export default Footer