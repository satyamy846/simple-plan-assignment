import ClassesImg from '../assets/classes_img.png';
import { FaStar } from "react-icons/fa";
import { BsSave2 } from "react-icons/bs";
const card_details = [{
    src:ClassesImg,
    discount:"60% OFF",
    language:"LANGUAGE",
    subheading:"Class name - Lorem ipsum sit elit varsit lectusi sit amet",
    author:"by John Doe",
    description:"Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
    price:"Rs1,499",
    userMessage: "Enroll Now",
    rating:"4.7"
},
{
    src:ClassesImg,
    discount:"60% OFF",
    language:"LANGUAGE",
    subheading:"Class name - Lorem ipsum sit elit varsit lectusi sit amet",
    author:"by John Doe",
    description:"Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
    price:"Rs1,499",
    userMessage: "Enroll Now",
    rating:"4.7"
},
{
    src:ClassesImg,
    discount:"60% OFF",
    language:"LANGUAGE",
    subheading:"Class name - Lorem ipsum sit elit varsit lectusi sit amet",
    author:"by John Doe",
    description:"Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
    price:"Rs1,499",
    userMessage: "Enroll Now",
    rating:"4.7"
},
{
    src:ClassesImg,
    discount:"60% OFF",
    language:"LANGUAGE",
    subheading:"Class name - Lorem ipsum sit elit varsit lectusi sit amet",
    author:"by John Doe",
    description:"Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
    price:"Rs1,499",
    userMessage: "Enroll Now",
    rating:"4.7"
},]

export default function ProductDetails() {
  return (
    <>
        <div className="p-24" id="products">
            <div className="heading flex justify-between items-center py-3">
                <div className="heading-left flex gap-3 items-baseline">
                    <h3 className='font-pp_pangram_bold text-3xl text-primary'>Discover classes</h3>
                    <a href="" className='underline text-[#E25753] font-nunito'>SHOW ALL</a>
                </div>
                <div className="heading-right flex gap-4 items-center ">
                    <p className='text-gray font-light font-nunito'>Show prices in:</p>
                    <div className="btn-wrap font-nunito">
                        <button className='bg-primary text-white rounded-l-full py-2 px-5 '>NOK</button>
                        <button className='bg-lightblue text-black rounded-r-full py-2 px-5'>INR</button>
                    </div>
                </div>
            </div>
            <p className='py-4 font-nunito font-light'>Choose from a variety of classes from around the world.</p>
            <div className="card-wrap flex gap-10 justify-between flex-wrap min-w-64 min-h-94 lg:flex-nowrap">
                {
                    card_details.map((item) =>  (
                        <>
                            <div className="card rounded shadow overflow-hidden object-cover ">
                                <div className='relative'>
                                <img src={item.src} alt="card-img" className='w-full'/>
                                <p className='absolute top-2 left-2 bg-white px-3 py-1 text-sm font-pp_pangram_bold text-primary'> {item.discount} </p>
                                <div className='absolute top-2 right-2 bg-white p-2'>
                                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 15L5.99942 11.9565L1 15V1.6087C1 1.44726 1.06585 1.29244 1.18306 1.17828C1.30027 1.06413 1.45924 1 1.625 1H10.375C10.5408 1 10.6997 1.06413 10.8169 1.17828C10.9342 1.29244 11 1.44726 11 1.6087V15Z" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                </div>
                                </div>
                                <div className="content p-4 flex flex-col gap-3 bg-[#E9EFFF]">
                                    <h2 className='text-primary font-bold font-nunito'>{item.language}</h2>
                                    <h4 className='font-pp_pangram_semibold'>{item.subheading}</h4>
                                    <div className='flex gap-4 font-nunito'>
                                    <span className='font-light text-sm '>{item.author}</span>
                                    <span className='text-[#FFB051] flex items-center gap-1 text-sm'>{item.rating} <FaStar className='text-[#FFB051] inline'/></span>
                                    </div>
                                    
                                    <p className='font-nunito'>{item.description}</p>
                                </div>
                                <div className="price-title bg-primary flex justify-between text-[#fff] px-3 py-1 font-nunito">
                                    <p>{item.price}</p>
                                    <p>{item.userMessage}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}
