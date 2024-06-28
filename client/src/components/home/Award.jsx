import '../../styles/award.scss';
import awardImgOne from '../../assets/traipadvisor.gif';
import awardImgTwo from '../../assets/images/award.jpg';
import awardImgThree from '../../assets/images/award2.jpg';
import awardImgFour from '../../assets/images/award3.png';
import Marquee from "react-fast-marquee";
const Award = () => {
  return (
    <section className='awardMainSection'>
        <h1>Our Achivements</h1>
        <Marquee
        speed={100}
        >
          <div className="awardImgContainer">
              <img 
              className='awardImg awardBigImg' 
              src={awardImgTwo} 
              alt="Travelvago" />
          </div>

          <div className="awardImgContainer">
              <img 
              className='awardImg' 
              src={awardImgThree} 
              alt="Travelvago" 
              />
          </div>
          <div className="awardImgContainer">
              <img 
              className='awardImg' 
              src={awardImgFour} 
              alt="Travelvago" 
              />
          </div>
          <div className="awardImgContainer">
              <img 
              className='awardImg' 
              src={awardImgOne} 
              alt="Travelvago" 
              />
          </div>
        </Marquee>
    </section>
  )
}

export default Award