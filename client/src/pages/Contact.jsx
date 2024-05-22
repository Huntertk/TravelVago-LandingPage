import '../styles/contactPage.scss';
import { contactImgViwerData } from '../data';
import { ContactCardContainer, ContactEnquiryForm, ContactQuotationForm, ImageSlider, TitleContainer } from '../components';
import { useState } from 'react';


const Contact = () => {
    const [activeTab, setActiveTab] = useState("Enquiry")
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
        <div className="form-tab-container">
          <button 
          className={`tab-button ${activeTab === 'Enquiry' ? "active" : ""}`}
          onClick={() =>setActiveTab("Enquiry")}
          >Enquiry Form</button>
          <button 
          className={`tab-button ${activeTab === 'Quotation' ? "active" : ""}`}
          onClick={() =>setActiveTab("Quotation")}
          >Quotation Form</button>
        </div>
        <div className="forms-container-wrapper">
          {
            activeTab === 'Enquiry' ? <ContactEnquiryForm /> : <ContactQuotationForm />
          }
        </div>
    </section>
  )
}

export default Contact