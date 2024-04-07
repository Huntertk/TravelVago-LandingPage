import { CountryGrid, ImageSlider } from "../components"
import { destinationImgViwerData, homeCountryData } from "../data"


const Destination = () => {
  return (
    <section className='destinatonPageMainSection'>
        <ImageSlider imgData={destinationImgViwerData} />
        <CountryGrid countryData={homeCountryData} para={"Explore tours by destinations"} title={"Explore New Destination"} />
    </section>
  )
}

export default Destination