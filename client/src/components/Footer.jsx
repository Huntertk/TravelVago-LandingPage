import '../styles/footer.scss';
import logo from '../assets/images/tvagologo.png';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

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
                    <a href="https://www.instagram.com/jomtravellocal/?hl=en" target='__blank'>
                        <FaInstagram className='instagram' />
                    </a>
                    <a href="https://www.facebook.com/travelvagoasia/" target='__blank'>
                        <FaFacebookSquare className='facebook' />
                    </a>
                    
                </div>
                
            </div>
            <div className="footerSubConatiner">
                <p className='footerTitle'>Quick Links</p>
                <div className="linksContainer">
                    <NavLink to="/terms-condition">Terms & Condition</NavLink>
                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                    <NavLink to="/about-us">About Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <a href="https://www.tvg-partner.com/en/agent-registration" target='__blank'>Agent Sign Up</a>
                </div>
            </div>
            <div className="footerSubConatiner">
                <p className='footerTitle'>Need Help</p>
                <div className="contactDetailsContainer">
                    <p className='contactTitle'>For General Enquiries</p>
                    <p>+60356124646</p>
                </div>
                <div className="contactDetailsContainer">
                    <p className='contactTitle'>For Ticketing Enquiries</p>
                    <p>+6017-3078194</p>
                </div>
                <div className="contactDetailsContainer">
                    <p className='contactTitle'>Email us at</p>
                    <p className='email'>info@travelvago.com</p>
                </div>
                <div className="contactDetailsContainer">
                    <div id="TA_certificateOfExcellence696" className="TA_certificateOfExcellence">
                        <ul id="re8C8naf" className="TA_links QyoAAbNzkUI">
                            <li id="SofsVnQ3" className="jFQ6jMa2">
                                <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g298570-d12616388-Reviews-Travelvago-Kuala_Lumpur_Wilayah_Persekutuan.html">
                                    <img src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2024_L.png" alt="TripAdvisor" className="widCOEImg" id="CDSWIDCOELOGO"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyRightMainContainer">
            <p>Copyright © {new Date(Date.now()).getFullYear()} Travelvago</p>
        </div>
    </section>
  )
}

export default Footer