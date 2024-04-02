import { 
  ImageSlider, 
  CountryGrid, 
  ProductContainer
} from '../components';
import '../styles/home.scss';
const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider />
      <CountryGrid />
      <ProductContainer />
    </section>
  )
}

export default Home