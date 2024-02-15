import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Teacher1 from '../assets/Teachers/Teacher1.png';
import Teacher2 from '../assets/Teachers/Teacher2.png';
import Teacher3 from '../assets/Teachers/Teacher3.png';

export default function Teachers() {
  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 3,
    slidesToScroll:1,
    variableWidth: true,
    centerMode: true
  }

  return (
    <>
        <div id="teachers">
            <h1>Meet our teachers</h1>
            {/* Carousel needs to be added */}
            <Slider {...settings}>
              <div className="bg-primary ">
                <img src={Teacher1} alt="" className="w-40 h-60"/>
              </div>
              <div className="bg-primary  " >
                <img src={Teacher2} alt="" className="w-40 h-60"/>
              </div>
              <div className="bg-primary  ">
                <img src={Teacher3} alt="" className="w-40 h-60"/>
              </div>
            </Slider>

        </div>
    </>
  )
}
