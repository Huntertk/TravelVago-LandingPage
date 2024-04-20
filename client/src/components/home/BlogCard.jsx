import '../../styles/blogCard.scss';
import {useNavigate} from 'react-router-dom';

const BlogCard = ({data}) => {
  const navigate = useNavigate();
  return (
    <div 
      className='blogCardContainer'
    >
      <div className="blogImgContainer">
        <img src={data.img} alt={"ssa"} />
      </div>
      <div className="blogContent">
        <h1>{data.title}</h1>
        <p>{data.desc.slice(0,200)} <span
        onClick={() => navigate(`${data.slug}`)}
        >Read More...</span></p>
        <div className="buttonContainer">
          <button
            onClick={() => navigate(`${data.slug}`)}
          >Read Full Post</button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard