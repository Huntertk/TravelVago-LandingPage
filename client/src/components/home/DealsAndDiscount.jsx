import '../../styles/dealsAndDiscount.scss';
import TitleContainer from './TitleContainer';

const DealsAndDiscountMediumScreen = () => {
    
    return (
      <>
      <section className='dealsAndDiscountMainMediumSection'>
      <TitleContainer para={"Last minute offer for you"} title={"Deals & Discount"} />
          
          <div 
          className="dealsAndDiscountMainContainer"
          >
              <div id="dealsTopContainer" className='dealsAndDiscountCardDesign'>
                  <h1>Phuket</h1>
                  <p>Paradise Found, Adventures Await</p>
              </div>
                <div 
                id='dealsBottomSmallContainerOne' 
                className='dealsAndDiscountCardDesign'
                >
                        <h1>Explore Singapore</h1>
                        <p>Where Tradition Meets Modernity</p>
                    </div>
                    <div 
                    id='dealsBottomSmallContainerTwo' 
                    className='dealsAndDiscountCardDesign'>
                        <h1>Amazing Vietnam</h1>
                        <p>Enjoy each of our tours!</p>
                    </div>
                    <div
                    className="dealsBottomSubContainer dealsAndDiscountCardDesign" id='dealsBottomSubContainer'>
                    <h1>Discover Malaysia</h1>
                    <p>Where Adventure Meets Tranquility</p>
                </div>
          </div>
      </section>
      </>
    )
  }

const DealsAndDiscount = () => {
    
  return (
    <>
    <section className='dealsAndDiscountMainSection'>
        <TitleContainer para={"Last minute offer for you"} title={"Deals & Discount"} />
        <div className="dealsAndDiscountMainContainer">
            <div 
            id="dealsTopContainer" 
            className='dealsAndDiscountCardDesign'
            >

                <h1>Phuket</h1>
                <p>Paradise Found, Adventures Await</p>
            </div>
            <div className="dealsBottomContainer">
                <div className="dealsBottomSubContainer">
                    <div 
                    id='dealsBottomSmallContainerOne' className='dealsAndDiscountCardDesign'>
                        <h1>Explore Singapore</h1>
                        <p>Where Tradition Meets Modernity</p>
                    </div>
                    <div 
                    id='dealsBottomSmallContainerTwo' className='dealsAndDiscountCardDesign'>
                        <h1>Amazing Vietnam</h1>
                        <p>Enjoy each of our tours!</p>
                    </div>
                </div>
                <div
                className="dealsBottomSubContainer dealsAndDiscountCardDesign" id='dealsBottomSubContainer'>
                    <h1>Discover Malaysia</h1>
                    <p>Where Adventure Meets Tranquility</p>
                </div>
            </div>
        </div>
    </section>
    <DealsAndDiscountMediumScreen />
    </>
  )
}

export default DealsAndDiscount