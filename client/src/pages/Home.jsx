import { ImageSlider } from '../components';
import CountryGrid from '../components/home/CountryGrid';
import '../styles/home.scss';
const Home = () => {
  return (
    <section className='homeMainSection'>
      <ImageSlider />
      <CountryGrid />
    </section>
  )
}

export default Home