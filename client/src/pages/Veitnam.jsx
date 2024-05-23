import { DynamicHeading, ImageSlider, WhyVisitDestination } from '../components';
import {  vietnamePageDetailsData, vietnamPageImgViwerData,} from '../data';
import '../styles/destinationSubPage.scss';

const Veitnam = () => {
  return (
    <>
      <DynamicHeading title={"Veitnam"} />
      <section className='destinationSubPageMainSection'>
          <ImageSlider imgData={vietnamPageImgViwerData} />
          <div className="destinationSubPageContainer">
              <div id="titleContainer">
                  <h1 className='destinationSubPageMainTitle'>Experience the Timeless Charm of Vietnam</h1>
                  <p className='destinationSubPageMainPara'>Welcome to Vietnam, a land of breathtaking natural beauty, rich history, and vibrant culture waiting to be discovered. From the bustling streets of Hanoi to the tranquil waters of Ha Long Bay, Vietnam offers an unforgettable adventure for every traveler.</p>
              </div>
              <WhyVisitDestination data={vietnamePageDetailsData}  />
          </div>
        
      </section>
    </>
  )
}

export default Veitnam