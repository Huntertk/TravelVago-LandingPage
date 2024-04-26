import { ImageSlider, WhyVisitDestination } from '../components';
import { malaysiaPageDetailsData, malaysiaPageImgViwerData,} from '../data';
import '../styles/destinationSubPage.scss';

const Malaysia = () => {
  return (
    <section className='destinationSubPageMainSection'>
        <ImageSlider imgData={malaysiaPageImgViwerData} />
        <div className="destinationSubPageContainer">
            <div id="titleContainer">
                <h1 className='destinationSubPageMainTitle'>Discover Malaysia</h1>
                <p className='destinationSubPageMainPara'>A Fusion of Cultures, Nature, and Adventure</p>

                <p className='destinationSubPageMainPara'>Welcome to Malaysia, a vibrant tapestry of cultures, landscapes, and experiences waiting to be explored. From bustling cities to pristine beaches, lush rainforests to historical landmarks, Malaysia offers something for every traveler.</p>
            </div>
            <WhyVisitDestination data={malaysiaPageDetailsData}  />
        </div>
       
    </section>
  )
}

export default Malaysia