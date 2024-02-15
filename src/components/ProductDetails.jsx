import ClassesImg from '../assets/classes_img.png';
import { FaStar } from "react-icons/fa";
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
                    <h3 className='font-bold text-3xl text-primary'>Discover classes</h3>
                    <a href="" className='underline text-[#E25753]'>SHOW ALL</a>
                </div>
                <div className="heading-right flex">
                    <p>Show prices in:</p>
                    <div className="btn-wrap">
                        <button>NOK</button>
                        <button>INR</button>
                    </div>
                </div>
            </div>
            <p className='py-4'>Choose from a variety of classes from around the world.</p>
            <div className="card-wrap flex gap-10 justify-between flex-wrap min-w-64 min-h-94 lg:flex-nowrap">
                {
                    card_details.map((item) =>  (
                        <>
                            <div className="card rounded shadow overflow-hidden object-cover ">
                                <img src={item.src} alt="card-img" className='w-full'/>
                                <div className="content p-4 flex flex-col gap-3 bg-[#E9EFFF]">
                                    <h2 className='text-primary font-bold'>{item.language}</h2>
                                    <h4 className='font-semibold '>{item.subheading}</h4>
                                    <div className='flex gap-4'>
                                    <span className='font-light text-sm'>{item.author}</span>
                                    <span className='text-[#FFB051] flex items-center gap-1 text-sm'>{item.rating} <FaStar className='text-[#FFB051] inline'/></span>
                                    </div>
                                    
                                    <p>{item.description}</p>
                                </div>
                                <div className="price-title bg-primary flex justify-between text-[#fff] px-3 py-1">
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
