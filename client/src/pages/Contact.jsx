import '../styles/contactPage.scss';
import { contactImgViwerData } from '../data';
import { ContactCardContainer, ContactForm, ImageSlider, TitleContainer } from '../components';


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

          <ContactCardContainer address={"Singapore"} phone={"+610629262655"} title={"Singapore Office"} email={"support@travelvago.com"} />

          <ContactCardContainer address={"Pakistan"} phone={"+610629262655"} title={"Pakistan Office"} email={"support@travelvago.com"} />

        </div>
        <ContactForm />
    </section>
  )
}

export default Contact