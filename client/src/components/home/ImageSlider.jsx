import '../../styles/imageSlider.scss';
import {homeImgViwerData} from '../../data';
import { useEffect, useState } from 'react';
import cloud from '../../assets/images/cloud.png'

const ImageSlider = () => {
  const [sliderChange, setSliderChange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * homeImgViwerData.length);
      setSliderChange(newIndex);
      return () => clearInterval(interval)
    },5000)

  },[]) 
  return (
    <section className='homeImageSliderSection'>
      <div className="homeImageSlideContainer"
      
      >
        <img className='sliderImage' src={homeImgViwerData[sliderChange].img} alt={homeImgViwerData[sliderChange].title} />
        <h1 className='sliderTitle'>{homeImgViwerData[sliderChange].title}</h1>
        <img src={cloud} className='cloudImg' alt="" />
      </div>

    </section>
  )
}

export default ImageSlider