import { useState } from 'react';
import '../../styles/guides.scss';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { guidesData } from '../../data';

const GuidesCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    
    const nextSlide = () => {
        if(activeSlide === guidesData.length-1){
            setActiveSlide(0)
            return;
        }
        setActiveSlide(prev => prev + 1);
    }

    const prevSlide = () => {
        if(activeSlide === 0){
            setActiveSlide(guidesData.length-1)
            return;
        }
        setActiveSlide(prev => prev - 1);
    }
  return (
    <section className='guidesMainSection'>
        <div className="guidesMainSectionTitleContainer">
            <p>People who create a fairy tale for you</p>
            <h1>MEET OUR GUIDES</h1>
        </div>
        <div className="guidesCarouselContainer">
            <img src={guidesData[activeSlide].imgUrl} alt={guidesData[activeSlide].name} />
            <h1>{guidesData[activeSlide].name}</h1>
            <p>{guidesData[activeSlide].title}</p>
            <div className="leftArrow" onClick={prevSlide}>
                <FaChevronLeft />
            </div>
            <div className="rightArrow" onClick={nextSlide}>
                <FaChevronRight />
            </div>
        </div>
    </section>
  )
}

export default GuidesCarousel