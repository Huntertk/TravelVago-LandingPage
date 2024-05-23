import '../styles/blogsDetails.scss';
import { useParams } from 'react-router-dom'
import { blogsData } from '../data';
import { DynamicHeading, ImageSlider } from '../components';
import { useEffect, useRef } from 'react';

const BlogDetails = () => {
    const {slug} = useParams();
    const data = blogsData.find(d => d.slug === slug);
    const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();

  },[]) 
    
  return (
    <>
    <DynamicHeading title={data.title} />
        <section className='blogsDetailsMainSection'>
            {/* <ImageSlider imgData={data.img} /> */}
            <div className="blogsDetailsImageContainer"
            ref={divRef}
            tabIndex={0}
            >
                <img src={data.img} alt={data.title} />
            </div>
            <div className="blogsDetailsTopContainer">
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
                {
                    data.detailedData.map((d) => (
                        <div className="blogsDetailsContentContainer" key={d.id}>
                            <h1>{d.title}</h1>
                            <p>{d.desc}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default BlogDetails