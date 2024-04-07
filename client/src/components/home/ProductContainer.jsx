import '../../styles/productContainer.scss';
import Product from './Product';
import {homeProductData} from '../../data';
import TitleContainer from './TitleContainer';

const ProductContainer = () => {
  return (
    <section className='productContainerMainSection'>
      <TitleContainer para={"Travel far enough, meet yourself"} title={"Most Popular Tours"}  />
      <div className="productContainer">
        {
          homeProductData.map((data) => <Product key={data.id} data={data}  />)
        }
      </div>
    </section>
  )
}

export default ProductContainer