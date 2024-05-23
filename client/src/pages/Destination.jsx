import { CountryGrid, DynamicHeading, ImageSlider } from "../components"
import { destinationImgViwerData, homeCountryData } from "../data"


const Destination = () => {
  return (
    <>
      <DynamicHeading title={"Destination"} />
      <section className='destinatonPageMainSection'>
          <ImageSlider imgData={destinationImgViwerData} />
          <CountryGrid countryData={homeCountryData} para={"Explore tours by destinations"} title={"Explore New Destination"} />
      </section>
    </>
  )
}

export default Destination