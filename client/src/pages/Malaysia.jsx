import { ImageSlider, WhyThailand, WhyVisitDestination } from '../components';
import { malaysiaPageDetailsData, malaysiaPageImgViwerData,} from '../data';
import '../styles/destinationSubPage.scss';
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Malaysia = () => {
  return (
    <section className='destinationSubPageMainSection'>
        <ImageSlider imgData={malaysiaPageImgViwerData} />
        <div className="destinationSubPageContainer">
            <div id="titleContainer">
                <h1 className='destinationSubPageMainTitle'>Discover Malaysia</h1>
                <p className='destinationSubPageMainPara'>A Fusion of Cultures, Nature, and Adventure</p>

                <p className='destinationSubPageMainPara'>Welcome to Malaysia, a vibrant tapestry of cultures, landscapes, and experiences waiting to be explored. From bustling cities to pristine beaches, lush rainforests to historical landmarks, Malaysia offers something for every traveler.</p>
            </div>
            <WhyVisitDestination data={malaysiaPageDetailsData}  />
            <div className="destinationSubPageContanContainer">
                <h1>Travelvago Co.Ltd</h1>
                <p>Unit 104,No, 30 Sukhumvit Alley Khlong Tan Nuea, Watthana, Bangkok 10110, Thailand</p>
                <p>TAT License: 14/03456</p>
                <p><FaPhoneAlt /> +66657158194</p>
                <p><IoMdMail /> thailand@travelvago.com</p>

            </div>
        </div>
       
    </section>
  )
}

export default Malaysia