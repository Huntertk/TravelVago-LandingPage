import '../../styles/award.scss';
import awardImgOne from '../../assets/images/awards.png';
import awardImgTwo from '../../assets/images/award.jpg';
import awardImgThree from '../../assets/images/award2.jpg';
import Marquee from "react-fast-marquee";
const Award = () => {
  return (
    <section className='awardMainSection'>
        <h1>Our Achivements</h1>
        <Marquee>
          <div className="awardImgContainer">
              <img src={awardImgTwo} alt="Travelvago" />
          </div>

          <div className="awardImgContainer">
              <img src={awardImgThree} alt="Travelvago" />
          </div>
        </Marquee>
    </section>
  )
}

export default Award