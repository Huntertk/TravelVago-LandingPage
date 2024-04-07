import { ImageSlider, ProductContainer } from '../components'
import { toursImgViwerData, toursProductData } from '../data'

const Tours = () => {
  return (
    <section className='tourPageMainSection'>
        <ImageSlider imgData={toursImgViwerData} />
        <ProductContainer prodData={toursProductData} para={"Travel far enough, meet yourself"} title={"All Tours"}/>
    </section>
  )
}

export default Tours