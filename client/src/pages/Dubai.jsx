import { ImageSlider, WhyVisitDestination } from '../components';
import { dubaiPageDetailsData, dubaiPageImgViwerData,} from '../data';
import '../styles/destinationSubPage.scss';

const Dubai = () => {
  return (
    <section className='destinationSubPageMainSection'>
        <ImageSlider imgData={dubaiPageImgViwerData} />
        <div className="destinationSubPageContainer">
            <div id="titleContainer">
                <h1 className='destinationSubPageMainTitle'>Discover the Glittering Gem of the Desert Dubai</h1>
                <p className='destinationSubPageMainPara'>Welcome to Dubai, where opulence, innovation, and Arabian hospitality converge to create an unforgettable experience in the heart of the desert. From towering skyscrapers to pristine beaches, ancient souks to world-class shopping malls, Dubai offers a dazzling array of attractions and experiences.</p>
            </div>
            <WhyVisitDestination data={dubaiPageDetailsData}  />
        </div>
       
    </section>
  )
}

export default Dubai