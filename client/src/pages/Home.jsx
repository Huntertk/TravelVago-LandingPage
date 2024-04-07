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
  GuidesCarousel
} from '../components';
import { homeCountryData, homeImgViwerData, homeProductData } from '../data';

import '../styles/home.scss';


const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider imgData={homeImgViwerData} />
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