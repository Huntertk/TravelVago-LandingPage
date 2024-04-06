import { FaRegSnowflake, FaUmbrellaBeach } from 'react-icons/fa6';
import { GiRaining } from 'react-icons/gi';
import { IoIosLeaf } from 'react-icons/io';
import '../../styles/seasonalTour.scss';
import { useState } from 'react';
import { seasonalTourData } from '../../data';
import {motion} from 'framer-motion';

const SeasonalTours = () => {
    const [selectedSeasonalTour, setSelectedSeasonalTour] = useState("WINTER");
    const selectedSeasonalData = seasonalTourData.filter((d) => d.season === selectedSeasonalTour);
  return (
    <section className='seasonalTourMainSection'>
        <div className="seasonalTourTitleContainer">
              <p>Book now and get a discount</p>
              <h1>LET'S TRAVEL ALL YEAR AROUND</h1>
          </div>

          <div className="seasonalTourButtonSelectorContainer">
            <button 
                className={`seasonalTourButton ${selectedSeasonalTour === 'WINTER' ? 'active' : ''}`}
                onClick={() => setSelectedSeasonalTour('WINTER')}
            >
                <FaRegSnowflake />
                WINTER
            </button>
            <button 
                className={`seasonalTourButton ${selectedSeasonalTour === 'SPRING' ? 'active' : ''}`}
                onClick={() => setSelectedSeasonalTour('SPRING')}
            >
                <GiRaining />
                SPRING
            </button>
            <button 
                className={`seasonalTourButton ${selectedSeasonalTour === 'SUMMER' ? 'active' : ''}`}
                onClick={() => setSelectedSeasonalTour('SUMMER')}
            >
                <FaUmbrellaBeach  />
                SUMMER
            </button>
            <button 
                className={`seasonalTourButton ${selectedSeasonalTour === 'AUTUMN' ? 'active' : ''}`}
                onClick={() => setSelectedSeasonalTour('AUTUMN')}
            >
                <IoIosLeaf />
                AUTUMN
            </button>
          </div>
          <div className="seasonalTourCardContainer"
          >
            <div className="seasonalTourCardImgContainer">
                <img src={selectedSeasonalData[0].imgUrl} alt={selectedSeasonalData[0].title} />
            </div>
            <div className="seasonalTourCardTextContent">
                <h1>{selectedSeasonalData[0].title}</h1>
                <p>{selectedSeasonalData[0].desc}</p>
            </div>
          </div>
    </section>
  )
}

export default SeasonalTours