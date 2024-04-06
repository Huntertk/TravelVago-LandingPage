import '../../styles/productContainer.scss';
import Product from './Product';
import {homeProductData} from '../../data';

const ProductContainer = () => {
  return (
    <section className='productContainerMainSection'>
      <div className="productContainerTitleContainer">
          <p>Travel far enough, meet yourself</p>
          <h1>Most Popular Tours</h1>
      </div>
      <div className="productContainer">
        {
          homeProductData.map((data) => <Product key={data.id} data={data}  />)
        }
      </div>
    </section>
  )
}

export default ProductContainer