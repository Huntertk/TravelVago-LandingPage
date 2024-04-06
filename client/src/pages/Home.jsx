import { 
  ImageSlider, 
  CountryGrid, 
  ProductContainer,
  Award,
  DealsAndDiscount,
  TourCategories,
  VideoContainer
} from '../components';

import '../styles/home.scss';


const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider />
      <DealsAndDiscount />
      <TourCategories />
      <ProductContainer />
      <VideoContainer />
      <CountryGrid />
      <Award />
    </section>
  )
}

export default Home