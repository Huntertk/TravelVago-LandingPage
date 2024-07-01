import { useNavigate } from 'react-router-dom';
import '../../styles/product.scss';

const Product = ({data}) => {
  const navigate = useNavigate()
  return (
    <div 
      className='productCardContainer'
    >
      <div className="productImgContainer">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="productContent">
        <h1>{data.title}</h1>
        <div className="buttonContainer">
          <button onClick={() => navigate(`${data.slug ? data.slug : "/"}`)}>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default Product