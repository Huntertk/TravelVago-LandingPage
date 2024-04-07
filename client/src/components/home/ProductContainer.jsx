import '../../styles/productContainer.scss';
import Product from './Product';
import TitleContainer from './TitleContainer';

const ProductContainer = ({prodData, para, title}) => {
  return (
    <section className='productContainerMainSection'>
      <TitleContainer para={para} title={title}  />
      <div className="productContainer">
        {
          prodData.map((data) => <Product key={data.id} data={data}  />)
        }
      </div>
    </section>
  )
}

export default ProductContainer