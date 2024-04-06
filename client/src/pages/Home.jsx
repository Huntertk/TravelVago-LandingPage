import { 
  ImageSlider, 
  CountryGrid, 
  ProductContainer,
  Award,
  DealsAndDiscount,
  TourCategories,
  VideoContainer,
  WhyTravel
} from '../components';

import '../styles/home.scss';


const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider />
      <WhyTravel />
      <DealsAndDiscount />
      <TourCategories />
      <ProductContainer />
      <Award />
      <VideoContainer />
      <CountryGrid />
    </section>
  )
}

export default Home