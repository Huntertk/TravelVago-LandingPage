import '../../styles/dealsAndDiscount.scss';

const DealsAndDiscount = () => {
  return (
    <section className='dealsAndDiscountMainSection'>
        <div className="dealsAndDiscountTitleContainer">
            <p>Last minute offer for you</p>
            <h1>Deals & Discount</h1>
        </div>
        <div className="dealsAndDiscountMainContainer">
            <div id="dealsTopContainer" className='dealsAndDiscountCardDesign'>
                <h1>Adventures in Japan</h1>
                <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
            </div>
            <div className="dealsBottomContainer">
                <div className="dealsBottomSubContainer">
                    <div id='dealsBottomSmallContainerOne' className='dealsAndDiscountCardDesign'>
                        <h1>Extreme Madagascar</h1>
                        <p>Enjoy each of our tours!</p>
                    </div>
                    <div id='dealsBottomSmallContainerTwo' className='dealsAndDiscountCardDesign'>
                        <h1>Amazing Colombia</h1>
                        <p>Enjoy each of our tours!</p>
                    </div>
                </div>
                <div className="dealsBottomSubContainer dealsAndDiscountCardDesign" id='dealsBottomSubContainer'>
                    <h1>Aristocratic Lithuania</h1>
                    <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DealsAndDiscount