import { IoLocationSharp } from "react-icons/io5";
import '../styles/contactPage.scss';
import { contactImgViwerData } from '../data';
import { ImageSlider, TitleContainer } from '../components';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import {motion} from 'framer-motion';

const Contact = () => {
  const easeUpLeft = {
    initial:{
        x:-100,
        opacity:0,
        scale:0,
    },
    whileInView:{
        x:0,
        opacity: 1,
        scale:1,
      },
      transition:{
        duration:0.3
      }
}
  return (
    <section className='contanPageMainSection'>
        <ImageSlider imgData={contactImgViwerData} />
        <TitleContainer title={"Contact Us"} para={"Get in Touch"} />
          <p>Ready to start planning your next adventure? Contact our dedicated team of travel experts at Travelvago today. Whether you're dreaming of a relaxing beach vacation, an adrenaline-fueled adventure, or a cultural immersion like no other, we're here to turn your travel dreams into reality. Let's embark on this journey together!</p>
        <div className="contactCardContainer">
          <motion.div {...easeUpLeft} className="contactCard">
            <img src="https://i.postimg.cc/MTxWWDnb/pexels-kin-pastor-777059.jpg" alt="singapore" />
            <h1>Singapore Office</h1>
            <div className="contactDetailsContainer">
              <div className="contactDetails">
                <IoLocationSharp />
                <p>Marina Bay Sands, Singapore</p>
              </div>
              <div className="contactDetails">
                <BsFillTelephoneFill />
                <p>+1 212 425 8617</p>
              </div>
              <div className="contactDetails">
                <IoIosMail />
                <p>support@travelvago.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...easeUpLeft} className="contactCard">
            <img src="https://i.postimg.cc/JzfrFmmF/pexels-marcus-herzberg-2086765.jpg" alt="dubai" />
            <h1>Dubai Office</h1>
            <div className="contactDetailsContainer">
              <div className="contactDetails">
                <IoLocationSharp />
                <p>Dubai - United Arab Emirates</p>
              </div>
              <div className="contactDetails">
                <BsFillTelephoneFill />
                <p>+1 212 425 8617</p>
              </div>
              <div className="contactDetails">
                <IoIosMail />
                <p>support@travelvago.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...easeUpLeft} className="contactCard">
            <img src="https://i.postimg.cc/tgFqQf44/pexels-pixabay-67559-1.jpg" alt="Malaysia" />
            <h1>Malaysia Office</h1>
            <div className="contactDetailsContainer">
              <div className="contactDetails">
                <IoLocationSharp />
                <p>Federal Territory of Kuala Lumpur, Malaysia</p>
              </div>
              <div className="contactDetails">
                <BsFillTelephoneFill />
                <p>+1 212 425 8617</p>
              </div>
              <div className="contactDetails">
                <IoIosMail />
                <p>support@travelvago.com</p>
              </div>
            </div>
          </motion.div>
        </div>
    </section>
  )
}

export default Contact