import { 
  ImageSlider, 
  CountryGrid, 
  ProductContainer,
  Award,
  DealsAndDiscount
} from '../components';

import '../styles/home.scss';


const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider />
      <DealsAndDiscount />
      <CountryGrid />
      <ProductContainer />
      <Award />
    </section>
  )
}

export default Home