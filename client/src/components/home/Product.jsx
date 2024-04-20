import '../../styles/product.scss';

const Product = ({data}) => {
  
  return (
    <div 
      className='productCardContainer'
    >
      <div className="productImgContainer">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="productContent">
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        <div className="buttonContainer">
          <button>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default Product