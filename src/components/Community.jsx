import Img1 from '../assets/Communities/Ellipse 12-1.png';
import Img2 from '../assets/Communities/Ellipse 12-2.png';
import Img3 from '../assets/Communities/Ellipse 12.png';


const community_card = [
    {
        image_link:Img1,
        name:"Karandeep",
        message:"It is nice to be on an international platform where there are teachers from around the world.",
        center_item:false,
    },
    {
        image_link:Img2,
        name:"Kalpana",
        message:"The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.",
        center_item:true,
    },
    {
        image_link:Img3,
        name:"Kirti",
        message:"As a student, I get to explore and learn about the different cultural specialties of another country with native teachers.",
        center_item:false,
    },
]

export default function Community() {
  return (
    <>
        <div className='flex flex-col gap-5 p-5 md:p-10 lg:p-24 items-center lg:items-start' id="community">
            <div className=''>
                <h1 className='font-pp_pangram_bold text-3xl text-primary mb-10 '>Love from community</h1>

            </div>
            <div className="card-wrapper flex gap-5 text-center flex-wrap lg:flex-nowrap ">
                {community_card.map((item) => (
                    <>
                        <div className={`card border rounded shadow border-borderlightblue p-10 lg:p-2 w-full  px-4 ${item.center_item ? 'bg-primary' : 'bg-white'}`}>
                            <div className='image flex justify-center items-center'>
                            <img src={item.image_link} alt="" />
                            </div>
                            <div className="content flex flex-col gap-3">
                            <h4 className={`font-pp_pangram_semibold ${item.center_item ? 'text-white ': 'text-[#A7A7A7]'}`}>{item.name}</h4>
                            <p className={`font-nunito ${item.center_item ? 'text-white' : 'text-black'}`}>{item.message}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            
        </div>
    </>
  )
}
