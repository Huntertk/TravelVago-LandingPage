import '../../styles/productContainer.scss';
import Product from './Product';
import TitleContainer from './TitleContainer';

const ProductContainer = ({prodData, para, title}) => {
  console.log(prodData);
  return (
    <section className='productContainerMainSection'>
      <TitleContainer para={para} title={title}  />
      <div className="productContainer" style={{
        gridTemplateColumns: `repeat(${prodData.length}, 1fr)`
      }}>
        {
          prodData.map((data) => <Product key={data.id} data={data}  />)
        }
      </div>
    </section>
  )
}

export default ProductContainer