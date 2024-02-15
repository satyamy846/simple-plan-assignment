import Img1 from '../assets/Reasons/1.png';
import Img2 from '../assets/Reasons/2.png';
import Img3 from '../assets/Reasons/3.png';
import Img4 from '../assets/Reasons/4.png';
import Img5 from '../assets/Reasons/5.png';
import Img6 from '../assets/Reasons/6.png';

const reason_data = [
{
    id:1,
    image:Img1,
    message:"Interactive live online classes at your convenient time slots"
},
{
    id:2,
    image:Img2,
    message:"Learning from passionate, talented and trusted teachers"
},
{
    id:3,
    image:Img3,
    message:"Cross country sharing of interesting and unique hobbies from across the world"
},
{
    id:4,
    image:Img4,
    message:"Age no bar for enroling into your cherished hobby or activity classes"
},
{
    id:5,
    image:Img5,
    message:"Transparent and structured fee payment options"
},
{
    id:6,
    image:Img6,
    message:"Contributing to the revival and nurturing of traditional art forms"
},]

export default function Reasons() {
  return (
    <>
        <div className='p-5' id="reasons">
            <h2 className='font-bold text-3xl text-primary'>
            Six reasons to choose our class
            </h2>

            <div className="reason-container flex items-center">
                {reason_data.map((item) => (
                    <>
                        <div className="reason-wrapper w-full lg:w-3/12 flex flex-col gap-3" key={item.id}>
                            <img src={item.image} alt="reason-img" className='w-[120px] h-[120px]'/>
                            <p className='font-semibold'>{item.message}</p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    </>
  )
}
