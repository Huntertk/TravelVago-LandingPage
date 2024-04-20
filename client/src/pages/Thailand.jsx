import { ImageSlider } from '../components'
import { thailandPageImgViwerData } from '../data'
import '../styles/thailandPage.scss'

const Thailand = () => {
  return (
    <section className='thailandPageMainSection'>
        <ImageSlider imgData={thailandPageImgViwerData} />
        <div id="titleContainer">
        <h1 className='thailandPageMainTitle'>Thailand</h1>
        <p className='thailandPageMainPara'>With its warm and welcoming atmosphere, rich culture, and ancient heritage, Thailand shines brightly, from its magnificent temples to its picturesque beaches, all under the enchanting Thai smile. Drawing countless visitors annually, Thailand is a melting pot of diverse cultures, blending the serene lives of monks with vibrant nightlife and beach festivities, offering a wide array of experiences for everyone.</p>

        <p className='thailandPageMainPara'>At Travelvago, we've curated a team of dynamic, knowledgeable, and passionate individuals dedicated to ensuring your Thailand holiday is nothing short of extraordinary and unforgettable. Our team goes above and beyond to bring your vacation dreams to life, sharing their expertise and enthusiasm for Thailand in ways that exceed expectations.</p>
      </div>
    </section>
  )
}

export default Thailand