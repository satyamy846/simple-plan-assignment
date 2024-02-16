import image1 from '../assets/Categories/img-1.png';
import image2 from '../assets/Categories/img-2.png';
import image3 from '../assets/Categories/img-3.png';
import image4 from '../assets/Categories/img-4.png';
import image6 from '../assets/Categories/img-6.png';
import image7 from '../assets/Categories/img-7.png';
import image8 from '../assets/Categories/img-8.png';
import './Styles/Category.css';

const card_data = [{
    src:image1,
    category_name:"Language"
},
{
    src:image2,
    category_name:"Cooking"
},
{
    src:image3,
    category_name:"Music"
},
{
    src:image4,
    category_name:"Arts & Craft"
},
{
    src:image4,
    category_name:"Yoga"
},
{
    src:image6,
    category_name:"Academics"
},
{
    src:image7,
    category_name:"Back to Roots"
},
{
    src:image8,
    category_name:"Funteresting"
},]

export default function Category() {
  return (
    <>
        <div className='p-5 md:p-10 lg:p-24 flex flex-col items-center lg:items-start' id="category">
            <h1 className='font-pp_pangram_bold text-3xl text-primary pl-5 mb-10'>Browse by category</h1>
            <div className="card-container flex gap-4 flex-wrap text-center w-full">
                {
                    card_data.map((item) => (
                        <>
                            <div className="card flex flex-col responsive-img-wrapper ">
                                
                                <img src={item.src} alt="category-img" className='max-w-full h-auto transition hover:scale-110 duration-300 ease-in-out' />
                                
                                <h4 className='font-pp_pangram_semibold mb-2'>{item.category_name}</h4>
                                
                                <hr className=''/>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}
