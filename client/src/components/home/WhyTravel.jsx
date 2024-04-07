import { whyTourData } from '../../data';
import '../../styles/whyTravel.scss';
import {motion} from 'framer-motion';
import TitleContainer from './TitleContainer';

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
            duration:0.3
          }
    }
  return (
    <section className='whyTravelMainSection'>
        <TitleContainer para={"We Care about your happiness"} title={"Why Travel with Travelvago ?"} />
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