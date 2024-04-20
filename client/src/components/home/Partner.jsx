import '../../styles/partner.scss';
import memberOneImg from '../../assets/images/memberOne.jpg'
import memberTwoImg from '../../assets/images/memberTwo.jpg'
import memberThreeImg from '../../assets/images/memberThree.jpg'

const Partner = () => {
  return (
    <section className='partnerMainContainer'>
        <h1>Accredited Member of</h1>
        <div className="partnerImgContainer">
            <img src={memberOneImg} alt="Mazza" />
            <img src={memberTwoImg} alt="PATA" />
            <img src={memberThreeImg} alt="ATTA" />
        </div>
    </section>
  )
}

export default Partner