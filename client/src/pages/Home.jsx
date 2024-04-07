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

import '../styles/home.scss';


const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider />
      <WhyTravel />
      <DealsAndDiscount />
      <TourCategories />
      <SeasonalTours />
      <ProductContainer />
      <Award />
      <VideoContainer />
      <GuidesCarousel />
      <CountryGrid />
    </section>
  )
}

export default Home