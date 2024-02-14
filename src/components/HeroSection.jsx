import VectorImg from '../assets/Mask Group.svg';
import HeartImage from '../assets/pngwing 1.svg';
import HeartImage2 from '../assets/Subtract.png';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
// align-items: center;
// justify-content: center;
// padding: 0.5em;
// gap: 2px;
export default function HeroSection() {
  return (
    <>
        <div className='flex items-center text-primary lg:flex-nowrap md:flex-wrap'>
            {/* Hero Section details  */}
            <div className='pl-8 flex flex-col gap-6'>
                <div className='flex items-center font-bold'>
                    <h3>Hobbies</h3>
                    <img src={HeartImage} alt="heart-img" className='w-[56px] h-[56px]'/>
                    <h3>Happiness</h3>
                    <img src={HeartImage2} alt="heart-img2" />
                    <h3>Home</h3>
                </div>
                <div>
                    <p>A Nordic startup which brings incredibly interesting hobbies from around the world to people of all ages.</p>
                </div>
                <div className='flex gap-4 items-start flex-1 w-full'>
                    <input type="text" name="" id="" placeholder="Enter your email" className='h-[40px] border rounded-3xl indent-2'/>
                    <button className=' flex items-center justify-center p-1 gap-1 border rounded-3xl bg-primary text-[#fff] py-2 px-4'>START EXPLORING <FaRegArrowAltCircleRight/></button>
                </div>
            </div>
            {/* SVG content  */}
            <div>
                <img src={VectorImg} alt="vector-img"/>
            </div>
        </div>
    </>
  )
}
