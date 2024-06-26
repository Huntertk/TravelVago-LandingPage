import { BlogCard, DynamicHeading, ImageSlider } from '../components';
import { blogImgViwerData, blogsData } from '../data';
import '../styles/blogs.scss';

const Blogs = () => {
  return (
    <>
    <DynamicHeading title={"Blogs"} />
      <section className='blogPageMainSection'>
          <ImageSlider imgData={blogImgViwerData} />
          <div className="blogsCardContainer">
            {
              blogsData.map((data) => (
                <BlogCard key={data.id} data={data} />
              ))
            }
          </div>
      </section>
    </>
  )
}

export default Blogs