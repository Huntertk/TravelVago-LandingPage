import '../styles/contactPage.scss';
import { contactImgViwerData } from '../data';
import { ContactCardContainer, ContactEnquiryForm, ContactQuotationForm, DynamicHeading, ImageSlider, TitleContainer } from '../components';
import { useState } from 'react';


const Contact = () => {
    const [activeTab, setActiveTab] = useState("Enquiry")
  return (
    <>
    <DynamicHeading title={"Contact Us"} />
      <section className='contactPageMainSection'>
          <ImageSlider imgData={contactImgViwerData} />
          <TitleContainer title={"Contact Us"} para={"Get in Touch"} />
            <p>Ready to start planning your next adventure? Contact our dedicated team of travel experts at Travelvago today. Whether you're dreaming of a relaxing beach vacation, an adrenaline-fueled adventure, or a cultural immersion like no other, we're here to turn your travel dreams into reality. Let's embark on this journey together!</p>
          <div className="contactCardContainer">
            
            <ContactCardContainer address={"No A-SG-25 Level SG Sunway Geo Avenue Bandar Sunway, Subang Jaya, 47500 Selangor"} phone={"+03-56124646"} title={"Malaysia Office"} email={"support@travelvago.com"} licenceNo={"License No: KPK/LN: 7837"} />

            <ContactCardContainer address={"Office 1111, Clover Bay Tower Business Bay, Dubau UAE P.O Box 3345,"} phone={"+971524208194 "} title={"Dubai Office"} email={"support@travelvago.com"}  />

            <ContactCardContainer address={"Vietnam"} phone={"+610629262655"} title={"Vietnam Office"} email={"support@travelvago.com"} />

            <ContactCardContainer address={"Room no. 112 Soi Ramkhamhang 21, Ramkhamhang Rd, Ramkhamhaeng Soi 21 Huamark, Bangkapi, Bangkok, Thailand 10240"} phone={"+66948055425"} title={"Thailand Office"} email={"support@travelvago.com"} />

            <ContactCardContainer address={"Singapore"} phone={"+610629262655"} title={"Singapore Office"} email={"support@travelvago.com"} />

            <ContactCardContainer address={"Room no 7, 2nd Floor, Ahsan Cash and Carry, Near Zafar Ullah Chock, Sargodha, 40100"} phone={"+610629262655"} title={"Pakistan Office"} email={"support@travelvago.com"} />

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
    </>
  )
}

export default Contact