import '../styles/footer.scss';
import logo from '../assets/images/tvagologo.png';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footerMainSection'>
        <div className="footerMainContainer">
            <div className="footerSubConatiner">
                <div className="logoContainer">
                    <img src={logo} alt="Travelvago" />
                </div>
                <p>Travelvago Sdn Bhd is a Malaysian-based travel agency. The company operates as both a Destination Management Company (DMC) and an Online Travel Agency.</p>
                <div className="socailIcons">
                    <FaInstagram />
                    <FaFacebookSquare />
                </div>
            </div>
            <div className="footerSubConatiner">
                <p className='footerTitle'>Quick Links</p>
                <div className="linksContainer">
                    <Link to="/terms-condition">Terms & Condition</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </div>
            <div className="footerSubConatiner">
                <p className='footerTitle'>Need Help</p>
                <div className="contactDetailsContainer">
                    <p className='contactTitle'>For General Enquiries</p>
                    <p>+66657158194</p>
                </div>
                <div className="contactDetailsContainer">
                    <p className='contactTitle'>For Ticketing Enquiries</p>
                    <p>+66657158194</p>
                </div>
            </div>
        </div>
        <div className="copyRightMainContainer">
            <p>Copyright © 2024 Travelvago</p>
        </div>
    </section>
  )
}

export default Footer