import { ImageSlider } from '../components';
import { blogImgViwerData } from '../data';
import '../styles/blogs.scss';

const Blogs = () => {
  return (
    <section className='blogPageMainSection'>
        <ImageSlider imgData={blogImgViwerData} />
    </section>
  )
}

export default Blogs