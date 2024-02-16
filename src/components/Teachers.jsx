// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Teacher1 from '../assets/Teachers/Teacher1.png';
import Teacher2 from '../assets/Teachers/Teacher2.png';
import Teacher3 from '../assets/Teachers/Teacher3.png';

export default function Teachers() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1
  // }

  const data = [
    {
      id:0,
      image_link: Teacher1,
      name: "Karandeep",
      designation: "YOGA"
    },
    {
      id:1,
      image_link: Teacher2,
      name: "Asier",
      designation: "ARTS & CRAFT"
    },
    {
      id:2,
      image_link: Teacher3,
      name: "Marius Neilson",
      designation: "ACADEMICS"
    },
    {
      id:3,
      image_link: Teacher3,
      name: "Marius Neilson",
      designation: "ACADEMICS"
    },
    {
      id:4,
      image_link: Teacher3,
      name: "Marius Neilson",
      designation: "ACADEMICS"
    },
  ]

  return (
    <>
        <div className=" px-5 md:px-10 lg:px-24 py-10 flex flex-col gap-10" id="teachers">
            <h1 className="text-primary font-pp_pangram_bold text-3xl">Meet our teachers</h1>
            {/* Carousel needs to be added */}
            <div className="carousel__wrapper flex gap-5 flex-wrap justify-center items-center lg:flex-nowrap lg:justify-between">
                {/* <Slider {...settings}> */}
                  {data.map((card) => (
                    <>
                      <div className="shadow flex flex-col justify-center items-center" key={card.id}>
                        <img src={card.image_link} alt="teacher-img" />
                        <div className="flex flex-col items-center gap-2 mb-2">
                        <h3 className="font-pp_pangram_semibold">{card.name}</h3>
                        <p className="font-nunito bold text-lightpink text-sm">{card.designation}</p>
                        </div>
                      </div>
                    </>
                  ))}
                {/* </Slider> */}
            </div>

        </div>
    </>
  )
}
