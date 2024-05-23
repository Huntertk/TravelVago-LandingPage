import { DynamicHeading, ImageSlider, WhyThailand } from '../components';
import { thailandPageImgViwerData } from '../data';
import '../styles/destinationSubPage.scss';
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Thailand = () => {
  return (
    <>
        <DynamicHeading title={"Thailand"} />
        <section className='destinationSubPageMainSection'>
            <ImageSlider imgData={thailandPageImgViwerData} />
            <div className="destinationSubPageContainer">
                <div id="titleContainer">
                    <h1 className='destinationSubPageMainTitle'>Thailand</h1>
                    <p className='destinationSubPageMainPara'>With its warm and welcoming atmosphere, rich culture, and ancient heritage, Thailand shines brightly, from its magnificent temples to its picturesque beaches, all under the enchanting Thai smile. Drawing countless visitors annually, Thailand is a melting pot of diverse cultures, blending the serene lives of monks with vibrant nightlife and beach festivities, offering a wide array of experiences for everyone.</p>

                    <p className='destinationSubPageMainPara'>At Travelvago, we've curated a team of dynamic, knowledgeable, and passionate individuals dedicated to ensuring your Thailand holiday is nothing short of extraordinary and unforgettable. Our team goes above and beyond to bring your vacation dreams to life, sharing their expertise and enthusiasm for Thailand in ways that exceed expectations.</p>
                </div>

                <div className="keyAreaContainer">
                    <h1>KEY AREAS AROUND THAILAND</h1>
                    <ul>
                        <li><IoLocationSharp /> Bangkok</li>
                        <li><IoLocationSharp /> Chiang Mai</li>
                        <li><IoLocationSharp /> Krabi</li>
                        <li><IoLocationSharp /> Chiang Rai</li>
                        <li><IoLocationSharp /> Koh Phangan</li>
                        <li><IoLocationSharp /> Phuket</li>
                        <li><IoLocationSharp /> Pattaya</li>
                        <li><IoLocationSharp /> Koh Samui</li>
                        <li><IoLocationSharp /> Kanchanaburi</li>
                    </ul>
                </div>
                <WhyThailand />
                <div className="destinationSubPageContanContainer">
                    <h1>Travelvago Co.Ltd</h1>
                    <p>Unit 104,No, 30 Sukhumvit Alley Khlong Tan Nuea, Watthana, Bangkok 10110, Thailand</p>
                    <p>TAT License: 14/03456</p>
                    <p><FaPhoneAlt /> +66657158194</p>
                    <p><IoMdMail /> thailand@travelvago.com</p>

                </div>
            </div>
        
        </section>
    </>
  )
}

export default Thailand