import { 
  ImageSlider, 
  CountryGrid, 
  ProductContainer,
  Award,
  DealsAndDiscount,
  TourCategories
} from '../components';

import '../styles/home.scss';


const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider />
      <DealsAndDiscount />
      <TourCategories />
      <CountryGrid />
      <ProductContainer />
      <Award />
    </section>
  )
}

export default Home