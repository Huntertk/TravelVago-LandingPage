import { whyTourData } from '../../data';
import '../../styles/whyTravel.scss';
import {motion} from 'framer-motion';

const WhyTravel = () => {
    const easeUpLeft = {
        initial:{
            x:-100,
            opacity:0,
            scale:0,
        },
        whileInView:{
            x:0,
            opacity: 1,
            scale:1,
          },
          transition:{
            delay:0.3,
            duration:0.5
          }
    }
  return (
    <section className='whyTravelMainSection'>
        <div className="whyTravelTextContainer">
            <p>We Care about your happiness</p>
            <h1>Why Travel with Travelvago ? </h1>
        </div>
        <div className="whyTravelMainContainer">
            {
                whyTourData.map((data) => (
                    <motion.div 
                    className="whyTravelCardContainer" key={data.id}
                    {...easeUpLeft}
                    >
                        <div className="whyTravelCardImage">
                            <img src={data.imgUrl} alt={data.title} />
                        </div>
                        <div className="whyTravelCardText">
                            <h1>{data.title}</h1>
                        </div>
                        <div className="whyTravelBadge">
                            <img src={data.iconUrl} alt={data.title} />
                        </div>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default WhyTravel