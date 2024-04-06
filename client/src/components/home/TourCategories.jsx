import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/tourCategories.scss';
import { FaLocationDot } from "react-icons/fa6";
import Slider from "react-slick";
import { GrPrevious, GrNext  } from "react-icons/gr";
import { tourCategoryData } from "../../data";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrNext
      className={className}
      style={{ ...style, display: "block", color:"#f26823" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrPrevious 
    className={className}
    style={{ ...style, display: "block", color:"#f26823" }}
      onClick={onClick}
    />
  );
}

const TourCategories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: false,
          prevArrow: false,
        }
      },
     
     
    ]
  };

  return (
    <section className='tourCategoryMainContainer'>
        <div className="tourCategoryTitleContainer">
              <p>Many places for your trip</p>
              <h1>Tour Categories</h1>
          </div>

          <div className="tourCategoryCarouselContainer">
            <div className="tourCategoryCarouselCardContainer">
              <Slider {...settings}>
                { 
                tourCategoryData.map((tour) => (
                  <div className="tourCategoryCarouselCard" key={tour.id}>
                      <img src={tour.imgUrl} alt={tour.title} />
                      <h1 className="title"><FaLocationDot /> {tour.title}</h1>
                      <p className="para">{tour.desc}</p>
                  </div>
                ))

                  
                  }
              </Slider>
                  
            </div>
          </div>
    </section>
  )
}

export default TourCategories