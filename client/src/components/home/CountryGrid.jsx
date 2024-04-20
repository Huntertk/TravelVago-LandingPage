import '../../styles/countryGrid.scss';
import {motion} from 'framer-motion';
import TitleContainer from './TitleContainer';
import { useNavigate } from 'react-router-dom';

const CountryGrid = ({countryData,para, title}) => {
  const navigate = useNavigate()
    const easeScaleUp = {
        initial:{
          scale:0,
          opacity:0
        },
        whileInView:{
          scale:1,
          opacity: 1
        },
        transition:{
          duration:0.6
        }
      }
  return (
    <section className='countryGridMainSection'>
        <TitleContainer para={para} title={title} />
        <div className="countryGridContainer">
            {
                countryData.map((country) => (
                    <motion.div 
                        className="gridItem" 
                        key={country.id}
                        {...easeScaleUp}
                        onClick={() => navigate(`/destination/${country.slug}`)}
                    >
                        <img src={country.img} alt={country.title} />
                        <h1>{country.title}</h1>
                    </motion.div>
                ))
            }
        </div>
    </section>
  )
}

export default CountryGrid