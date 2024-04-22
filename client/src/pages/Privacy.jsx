import '../styles/privacy.scss';
import { ImageSlider } from '../components';
import { PrivacyImgViwerData } from '../data';
import { FaDotCircle } from "react-icons/fa";

const Privacy = () => {
  return (
    <section className='privacyMainSection'>
        <ImageSlider imgData={PrivacyImgViwerData} />
        <div id="titleContainer">
            <h1 className='homeMainTitle'>Travelvago Privacy Policy</h1>
            <p className='homeMainPara'>At Travelvago, we are dedicated to ensuring the protection of your personal information and upholding your privacy rights, in compliance with the regulations of Malaysia, Thailand, and Singapore. If you have any queries or concerns about our policies or the handling of your personal data, please do not hesitate to contact us.</p>
      </div>
      <div className="privacyContainer">
            <div className="privacyContentContainer">
                <div className="privacyContent">
                    <h1><FaDotCircle /> Collection of Personal Information</h1>
                    <p>Your privacy is of utmost importance to us. When you browse our website, you can verify and authorize it to confirm the absence of any objectionable or sensitive content. Moreover, during normal browsing sessions, there's no requirement for you to divulge any personal information.</p>
                    <p>We only collect your personal data when you submit a request through our website. You have full control over the information you choose to provide us while utilizing our website. The personal data we collect depends on your interaction with us, the features you utilize, and the choices you make.</p>
                </div>
                <div className="privacyContent">
                    <h1><FaDotCircle /> The personal information we may collect includes</h1>
                    <p>Name, address, email, and phone number Details about your trip and specific travel requirements Rest assured, all information you submit is securely stored. We commit not to disclose your personal data to any third-party companies or organizations unless mandated by the laws of Malaysia, Thailand, or Singapore.</p>
                </div>
                <div className="privacyContent">
                    <h1><FaDotCircle /> Automatic Data Collection</h1>
                    <p>During your visits to our website, we automatically gather information from your computer, mobile device, or web browser.</p>
                    <h1>Typically, this data is non-personal and includes : </h1>
                    <p>Access information: Details of the pages visited, IP address, internet service provider, web browser type, mobile device type, and operating system.</p>
                    <p>We utilize this information to analyze user trends and enhance our website's functionality, ensuring compliance with the regulations of Malaysia, Thailand, and Singapore.</p>
                </div>
                <div className="privacyContent">
                    <h1><FaDotCircle /> The personal information we may collect includes</h1>
                    <p>We've implemented robust technical measures to safeguard your personal data against unauthorized access, misuse, disclosure, modification, destruction, or loss. However, it's essential to acknowledge that no website can guarantee absolute security, and we cannot be held liable for unauthorized or inadvertent access beyond our control, in compliance with the laws of Malaysia, Thailand, and Singapore.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Privacy