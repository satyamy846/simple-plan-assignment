import Slider from "react-slick";

export default function Teachers() {
  const settings = {
    dots: true,
    infinite: true,
    speed:300,
    slidesToShow: 1,
    slideToScroll: 1,
    variableWidth: true,
    centerMode: true
  }

  return (
    <>
        <div id="teachers">
            <h1>Meet our teachers</h1>
            {/* Carousel needs to be added */}
            <Slider {...settings}>
              <div className="bg-primary w-3 h-3">
                <h3>1</h3>
              </div>
              <div className="bg-primary w-3 h-3" >
                <h3>2</h3>
              </div>
              <div className="bg-primary w-3 h-3">
                <h3>3</h3>
              </div>
              <div className="bg-primary w-3 h-3">
                <h3>4</h3>
              </div>
            </Slider>

        </div>
    </>
  )
}
