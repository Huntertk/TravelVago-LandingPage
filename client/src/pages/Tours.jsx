import { DynamicHeading, ImageSlider, ProductContainer } from '../components'
import { toursImgViwerData, toursProductData } from '../data'

const Tours = () => {
  return (
    <>
      <DynamicHeading title={"Tours"} />
      <section className='tourPageMainSection'>
          <ImageSlider imgData={toursImgViwerData} />
          <ProductContainer prodData={toursProductData} para={"Travel far enough, meet yourself"} title={"All Tours"}/>
      </section>
    </>
  )
}

export default Tours