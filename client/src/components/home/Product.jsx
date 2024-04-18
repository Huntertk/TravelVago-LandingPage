import '../../styles/product.scss';
import { CiStopwatch } from "react-icons/ci";
import {motion} from 'framer-motion';

const Product = ({data}) => {
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
    <motion.div 
      className='productCardContainer'
      {...easeUpLeft}
    >
      <div className="productImgContainer">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="productContent">
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        <div className="buttonContainer">
          <button>View Details</button>
          {/* <div className="duration">
            <CiStopwatch />
          <p> {data.duration}</p>
          </div> */}
        </div>
      </div>
    </motion.div>
  )
}

export default Product