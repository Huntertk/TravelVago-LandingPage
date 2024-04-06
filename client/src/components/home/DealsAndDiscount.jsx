import '../../styles/dealsAndDiscount.scss';
import { motion} from 'framer-motion';

const DealsAndDiscountMediumScreen = () => {
    const easeUpLeft = {
        initial:{
            x:-100,
            opacity:0,
            scale:0,
        },
        whileInView:{
            x:0,
            opacity: 1,
            scale:1,
          },
          transition:{
            delay:0.3,
            duration:0.3
          }
    }
    return (
      <>
      <section className='dealsAndDiscountMainMediumSection'>
          <div className="dealsAndDiscountTitleContainer">
              <p>Last minute offer for you</p>
              <h1>Deals & Discount</h1>
          </div>
          <motion.div 
          className="dealsAndDiscountMainContainer"
          {...easeUpLeft}
          >
              <div id="dealsTopContainer" className='dealsAndDiscountCardDesign'>
                  <h1>Adventures in Japan</h1>
                  <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
              </div>
                <motion.div 
                {...easeUpLeft}
                id='dealsBottomSmallContainerOne' 
                className='dealsAndDiscountCardDesign'
                >
                        <h1>Extreme Madagascar</h1>
                        <p>Enjoy each of our tours!</p>
                    </motion.div>
                    <motion.div 
                    {...easeUpLeft} 
                    id='dealsBottomSmallContainerTwo' 
                    className='dealsAndDiscountCardDesign'>
                        <h1>Amazing Colombia</h1>
                        <p>Enjoy each of our tours!</p>
                    </motion.div>
                    <motion.div
                    {...easeUpLeft} 
                    className="dealsBottomSubContainer dealsAndDiscountCardDesign" id='dealsBottomSubContainer'>
                    <h1>Aristocratic Lithuania</h1>
                    <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
                </motion.div>
          </motion.div>
      </section>
      </>
    )
  }

const DealsAndDiscount = () => {
    const easeUpLeft = {
        initial:{
            x:-100,
            opacity:0,
            scale:0,
        },
        whileInView:{
            x:0,
            opacity: 1,
            scale:1,
          },
          transition:{
            delay:0.3,
            duration:0.3
          }
    }
  return (
    <>
    <section className='dealsAndDiscountMainSection'>
        <div className="dealsAndDiscountTitleContainer">
            <p>Last minute offer for you</p>
            <h1>Deals & Discount</h1>
        </div>
        <div className="dealsAndDiscountMainContainer">
            <motion.div 
            id="dealsTopContainer" 
            className='dealsAndDiscountCardDesign'
            {...easeUpLeft}
            >

                <h1>Adventures in Japan</h1>
                <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
            </motion.div>
            <div className="dealsBottomContainer">
                <div className="dealsBottomSubContainer">
                    <motion.div 
                    {...easeUpLeft}
                    id='dealsBottomSmallContainerOne' className='dealsAndDiscountCardDesign'>
                        <h1>Extreme Madagascar</h1>
                        <p>Enjoy each of our tours!</p>
                    </motion.div>
                    <motion.div 
                    {...easeUpLeft}
                    id='dealsBottomSmallContainerTwo' className='dealsAndDiscountCardDesign'>
                        <h1>Amazing Colombia</h1>
                        <p>Enjoy each of our tours!</p>
                    </motion.div>
                </div>
                <motion.div
                {...easeUpLeft}
                className="dealsBottomSubContainer dealsAndDiscountCardDesign" id='dealsBottomSubContainer'>
                    <h1>Aristocratic Lithuania</h1>
                    <p>Get an unforgettable experience from each of our trips! Travel with us!</p>
                </motion.div>
            </div>
        </div>
    </section>
    <DealsAndDiscountMediumScreen />
    </>
  )
}

export default DealsAndDiscount