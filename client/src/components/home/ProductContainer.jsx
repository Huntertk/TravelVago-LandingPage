import { useRef } from 'react';
import '../../styles/productContainer.scss';
import Product from './Product';
import TitleContainer from './TitleContainer';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

const ProductContainer = ({prodData, para, title}) => {
  const containerRef = useRef(null);
  const scrollLeft = () => {
    if(containerRef.current){
        containerRef.current.scrollBy({left:-353}) // Adjust the scroll amount
    }
  };
  const scrollRight = () => {
    if(containerRef.current){
        containerRef.current.scrollBy({left:353}) // Adjust the scroll amount
    }
  };
  return (
    <section className='productContainerMainSection'>
      <TitleContainer para={para} title={title}  />
      {
        prodData.length >= 3 && (
          <>
            <button className='scrollLeftBtn' onClick={scrollLeft}>
                <FaCircleChevronLeft />
              </button>
              <button className='scrollRightBtn' onClick={scrollRight}>
                <FaCircleChevronRight />
              </button>
          </>
        ) 
      }
      <div className="productContainer" ref={containerRef} style={{
        gridTemplateColumns: `repeat(${prodData.length}, 1fr)`,
        overflowX: prodData.length <= 3 ? "unset" : "scroll" 
      }}>
        {
          prodData.map((data) => <Product key={data.id} data={data}  />)
        }
      </div>
    </section>
  )
}

export default ProductContainer