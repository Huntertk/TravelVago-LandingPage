import { 
  ImageSlider, 
  CountryGrid, 
  ProductContainer,
  Award,
  DealsAndDiscount,
  TourCategories,
  VideoContainer,
  WhyTravel,
  SeasonalTours,
  GuidesCarousel,
} from '../components';
import { homeCountryData, homeImgViwerData, homeProductData } from '../data';

import '../styles/home.scss';


const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider imgData={homeImgViwerData} />
      <div id="titleContainer">
        <h1 className='homeMainTitle'>Welcome to Travelvago - Your Gateway to Adventure!</h1>
        <p className='homeMainPara'>Are you ready to embark on an unforgettable journey? At Travelvago, we specialize in curating extraordinary travel experiences that will leave you spellbound. Explore the wonders of Southeast Asia with our carefully selected destinations and tours, crafted to satisfy every wanderlust-filled soul.</p>
      </div>
      <WhyTravel />
      <DealsAndDiscount />
      <TourCategories />
      <SeasonalTours />
      <ProductContainer prodData={homeProductData} para={"Travel far enough, meet yourself"} title={"Most Popular Tours"}/>
      <Award />
      <VideoContainer />
      <GuidesCarousel />
      <CountryGrid countryData={homeCountryData} para={"Unforgettable Trip"} title={"Explore New Destination"} />
    </section>
  )
}

export default Home