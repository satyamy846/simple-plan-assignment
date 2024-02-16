import VectorImg from '../assets/HeroSections/Mask Group.png';
import HeartImage from '../assets/HeroSections/pngwing 1.png';
import HeartImage2 from '../assets/HeroSections/Subtract.png';

import { FaRegArrowAltCircleRight } from "react-icons/fa";
// align-items: center;
// justify-content: center;
// padding: 0.5em;
// gap: 2px;
export default function HeroSection() {
  return (
    <>
        <div className='hero-section-main-container flex items-center justify-center gap-10 text-primary p-5 md:p-10 lg:p-24 flex-wrap'>
            {/* Hero Section details  */}
            <div className='hero-section-content-wrapper pl-8 flex flex-col gap-6 max-w-[400px]'>
                <div className='flex items-center font-pp_pangram_bold text-xl flex-wrap'>
                    <h3>Hobbies</h3>
                    <img src={HeartImage} alt="heart-img" className='w-[56px] h-[56px]'/>
                    <h3>Happiness</h3>
                    <img src={HeartImage2} alt="heart-img2" />
                    <h3 >Home</h3>
                </div>
                <div>
                    <p className='font-nunito font-medium'>A Nordic startup which brings incredibly interesting hobbies from around the world to people of all ages.</p>
                </div>
                <div className='flex gap-4 items-start flex-1 w-full font-nunito relative z-[1]'>
                    <input type="email" id='email' placeholder="Enter your email" className='h-[40px] border rounded-3xl indent-2 w-full absolute'/>
                      <div className="flex justify-between bg-primary text-white items-center h-[40px] px-2 rounded-full absolute right-0 gap-2">
                          <button className=" flex items-center justify-center gap-1  text-white">START EXPLORING </button>
                          <FaRegArrowAltCircleRight />
                      </div>
                </div>
            </div>
            {/* SVG content  */}
            <div className='hero-section-svg-wrapper lg:max-w-[690px] object-cover overflow-hidden'>
                <img src={VectorImg} alt="vector-img" className='w-full h-full'/>
            </div>

            
        </div>

    </>
  )
}
