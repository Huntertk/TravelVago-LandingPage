import '../styles/contactPage.scss';
import { contactImgViwerData } from '../data';
import { ContactCardContainer, ImageSlider, TitleContainer } from '../components';


const Contact = () => {
  
  return (
    <section className='contactPageMainSection'>
        <ImageSlider imgData={contactImgViwerData} />
        <TitleContainer title={"Contact Us"} para={"Get in Touch"} />
          <p>Ready to start planning your next adventure? Contact our dedicated team of travel experts at Travelvago today. Whether you're dreaming of a relaxing beach vacation, an adrenaline-fueled adventure, or a cultural immersion like no other, we're here to turn your travel dreams into reality. Let's embark on this journey together!</p>
        <div className="contactCardContainer">
          
          <ContactCardContainer address={"Malaysia"} phone={"+610629262655"} title={"Malaysia Office"} email={"support@travelvago.com"} />
          <ContactCardContainer address={"Dubai"} phone={"+610629262655"} title={"Dubai Office"} email={"support@travelvago.com"}  />
          <ContactCardContainer address={"Vietnam"} phone={"+610629262655"} title={"Vietnam Office"} email={"support@travelvago.com"} />
          <ContactCardContainer address={"Thailand"} phone={"+610629262655"} title={"Thailand Office"} email={"support@travelvago.com"} />
          <ContactCardContainer address={"Pakistan"} phone={"+610629262655"} title={"Pakistan Office"} email={"support@travelvago.com"} />
          {/* <motion.div {...easeUpLeft} className="contactCard">
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
          </motion.div> */}
        </div>
    </section>
  )
}

export default Contact