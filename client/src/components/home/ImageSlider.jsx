import '../../styles/imageSlider.scss';
import { useEffect, useState } from 'react';
import cloud from '../../assets/images/cloud.png';

const ImageSlider = ({imgData}) => {
  const [sliderChange, setSliderChange] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * imgData.length);
      setSliderChange(newIndex);
    },5000)
    return () => clearInterval(interval)

  },[]) 
  return (
    <section className='homeImageSliderSection'>
      <div className="homeImageSlideContainer"
      
      >
        <img className='sliderImage' src={imgData[sliderChange].img} alt={imgData[sliderChange].title} />
        <h1 
        className='sliderTitle'
        >
          {imgData[sliderChange].title}
        <p className='sliderSubtitle'>{imgData[sliderChange].subTitle}</p>
          </h1>
        <img src={cloud} className='cloudImg' alt="cloud image" />
      </div>

    </section>
  )
}

export default ImageSlider