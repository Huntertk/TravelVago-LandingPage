import '../../styles/award.scss';
import awardImg from '../../assets/images/awards.png';

const Award = () => {
  return (
    <section className='awardMainSection'>
        <h1>Our Achivements</h1>
        <div className="awardImgContainer">
            <img src={awardImg} alt="Travelvago" />
        </div>
    </section>
  )
}

export default Award