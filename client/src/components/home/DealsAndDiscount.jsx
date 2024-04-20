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
                  <h1>Adventures in Japan</h1>
                  <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
              </div>
                <div 
                id='dealsBottomSmallContainerOne' 
                className='dealsAndDiscountCardDesign'
                >
                        <h1>Extreme Madagascar</h1>
                        <p>Enjoy each of our tours!</p>
                    </div>
                    <div 
                    id='dealsBottomSmallContainerTwo' 
                    className='dealsAndDiscountCardDesign'>
                        <h1>Amazing Colombia</h1>
                        <p>Enjoy each of our tours!</p>
                    </div>
                    <div
                    className="dealsBottomSubContainer dealsAndDiscountCardDesign" id='dealsBottomSubContainer'>
                    <h1>Aristocratic Lithuania</h1>
                    <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
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

                <h1>Adventures in Japan</h1>
                <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
            </div>
            <div className="dealsBottomContainer">
                <div className="dealsBottomSubContainer">
                    <div 
                    id='dealsBottomSmallContainerOne' className='dealsAndDiscountCardDesign'>
                        <h1>Extreme Madagascar</h1>
                        <p>Enjoy each of our tours!</p>
                    </div>
                    <div 
                    id='dealsBottomSmallContainerTwo' className='dealsAndDiscountCardDesign'>
                        <h1>Amazing Colombia</h1>
                        <p>Enjoy each of our tours!</p>
                    </div>
                </div>
                <div
                className="dealsBottomSubContainer dealsAndDiscountCardDesign" id='dealsBottomSubContainer'>
                    <h1>Aristocratic Lithuania</h1>
                    <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
                </div>
            </div>
        </div>
    </section>
    <DealsAndDiscountMediumScreen />
    </>
  )
}

export default DealsAndDiscount