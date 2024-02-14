import Img1 from '../assets/Communities/Ellipse 12-1.png';
import Img2 from '../assets/Communities/Ellipse 12-2.png';
import Img3 from '../assets/Communities/Ellipse 12.png';


const community_card = [
    {
        image_link:Img1,
        name:"Karandeep",
        message:"It is nice to be on an international platform where there are teachers from around the world."
    },
    {
        image_link:Img2,
        name:"Kalpana",
        message:"The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well."
    },
    {
        image_link:Img3,
        name:"Kirti",
        message:"As a student, I get to explore and learn about the different cultural specialties of another country with native teachers."
    },
]

export default function Community() {
  return (
    <>
        <div id="community">
            <h1>Love from community</h1>
            <div className="card-wrapper">
                {community_card.map((item) => (
                    <>
                        <div className="card">
                            <img src={item.image_link} alt="" />
                            <h4>{item.name}</h4>
                            <p>{item.message}</p>
                        </div>
                    </>
                ))}
            </div>
            
        </div>
    </>
  )
}
