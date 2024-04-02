import '../../styles/product.scss';
import { CiStopwatch } from "react-icons/ci";
import {motion} from 'framer-motion';

const Product = ({data}) => {
  const easeScaleUp = {
    initial:{
      scale:0,
      opacity:0
    },
    whileInView:{
      scale:1,
      opacity: 1
    },
  }
  console.log(data);
  return (
    <motion.div 
    className='productCardContainer'
    {...easeScaleUp}
    >
      <div className="productImgContainer">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="productContent">
        <h1>{data.title}</h1>
        <p>{data.tourPlace}</p>
        <p>{data.country}</p>
        <div className="buttonContainer">
          <button>View Details</button>
          <div className="duration">
            <CiStopwatch />
          <p> {data.duration}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Product