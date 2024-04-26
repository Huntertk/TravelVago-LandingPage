import { ImageSlider, WhyVisitDestination } from '../components';
import { singaporePageDetailsData, singaporePageImgViwerData,} from '../data';
import '../styles/destinationSubPage.scss';
const Singapore = () => {
  return (
    <section className='destinationSubPageMainSection'>
        <ImageSlider imgData={singaporePageImgViwerData} />
        <div className="destinationSubPageContainer">
            <div id="titleContainer">
                <h1 className='destinationSubPageMainTitle'>Experience the Dynamic Fusion of Culture and Innovation in Singapore</h1>
                <p className='destinationSubPageMainPara'>Welcome to Singapore, the Lion City, where tradition meets modernity in a captivating blend of culture, cuisine, and innovation. From futuristic skyscrapers to lush green spaces, Singapore offers a sensory journey like no other.</p>
            </div>
            <WhyVisitDestination data={singaporePageDetailsData}  />
        </div>
       
    </section>
  )
}

export default Singapore