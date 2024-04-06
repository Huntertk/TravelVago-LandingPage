import { whyTourData } from '../../data';
import '../../styles/whyTravel.scss';

const WhyTravel = () => {
  return (
    <section className='whyTravelMainSection'>
        <div className="whyTravelTextContainer">
            <p>We Care about your happiness</p>
            <h1>Why Travel with Travelvago ? </h1>
        </div>
        <div className="whyTravelMainContainer">
            {
                whyTourData.map((data) => (
                    <div className="whyTravelCardContainer" key={data.id}>
                        <div className="whyTravelCardImage">
                            <img src={data.imgUrl} alt={data.title} />
                        </div>
                        <div className="whyTravelCardText">
                            <h1>{data.title}</h1>
                        </div>
                        <div className="whyTravelBadge">
                            <img src={data.iconUrl} alt={data.title} />
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default WhyTravel