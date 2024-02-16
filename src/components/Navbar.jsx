import { RiArrowDropDownLine } from "react-icons/ri";
import Vector1 from '../assets/Dropdwown/Vector-1.png';
import Vector2 from '../assets/Dropdwown/Vector.png';
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const dropdown_content = [
  {
    id: 0,
    items: ['Language', 'Cooking', 'Music', 'Arts & Craft', 'Yoga', 'Academic', 'Back to Roots', 'Funteresting'],
  },
  {
    id: 1,
    items: ['All', 'Indian', 'Norwegian', 'Category 04']
  }
]


export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <>
      {/* ------------------- Navbar start ------------------- */}
      <nav className={`flex items-center 
                      justify-between w-full h-16 
                      px-10 md:px-12 py-2 lg:px-36  
                      font-nunito ${showDropdown ?
          'bg-lightblue'
          : 'bg-white'}`} id="navbar">
        <div className='nav-left__wrapper 
                        h-full flex justify-between 
                        items-center gap-10 text-primary'>
          <h2 className='font-bold text-2xl'>Logo</h2>
          <h4 className='flex items-center 
                        justify-center text-sm 
                        font-bold leading-none 
                        cursor-pointer'
      
            onMouseEnter={() => setShowDropdown(!showDropdown)}
            onMouseLeave={() => setShowDropdown(!showDropdown)}
          >CATEGORIES <RiArrowDropDownLine /></h4>

        </div>
        
        <div className='nav-right__wrapper hidden md:flex justify-center items-center gap-5'>
          <h3 className='text-primary font-bold'>TEACH</h3>
          <button className="bg-opacity-0 border rounded-full py-2 px-4 font-bold text-primary">LOGIN</button>
          <button className="bg-primary rounded-full py-2 px-4 font-bold text-white">SIGNUP</button>
        </div>
        {/* ------------------- Navbar end ------------------- */}

        {/* ----------------Hambugger Menu Button------------ */}
        <div className="flex justify-end md:hidden">
          <button className="text-3xl " onClick={() => setShowNavMenu(!showNavMenu)} >
            <IoMdMenu />
          </button>
          
        </div>
      </nav>
      {/* --------------- Hambugger Menu dropdown ---------- */}
      {showNavMenu && (
          <>
            <div className="hambugger-menu__dropdown w-full h-40 bg-primary flex flex-col items-center justify-center ">
                <ul className="text-white font-nunito flex flex-col gap-5 items-center justify-center">
                  <li><p>TEACH</p></li>
                  <li><p>LOGIN</p></li>
                  <li><p>SIGNUP</p></li>
                </ul>
            </div>
          </>
        )}


      {/* ----------------------Header Dropdown (Category)----------------- */}
      {
        showDropdown && (
          <>
            <div className="dropdown-section flex justify-center md:justify-around lg:justify-between px-[50px] lg:px-[144px] py-3 bg-lightblue absolute w-full flex-wrap z-90 h-[100vh] lg:h-[70vh] z-[2]">
              <div className="dropdown-section__left flex gap-10">
                {dropdown_content.map((item => (
                  <>
                    <div className="item-wrapper flex flex-col gap-2">
                      {item.items.map((x) => (
                        <>
                          <ul className="font-pp_pangram_semibold text-primary">
                            <li><a href="">{x}</a></li>
                          </ul>
                        </>
                      ))
                      }
                    </div>
                  </>
                )))}
              </div>
              <div className="dropdown-section__right">
                {/* SVG Image */}
                <div className="relative">
                  <img src={Vector2} alt="dropdown-vector-2" className="absolute" />
                  <img src={Vector1} alt="dropdown-vector-1" className="absolute" />
                </div>
                <div className="text relative flex flex-col justify-center items-center gap-3 text-center top-20 w-[300px]">
                  <p className="font-pp_pangram_bold text-xl text-white">“Do anything, but let it produce joy.”</p>
                  <p className="font-nunito text-white">-Walt Whitman</p>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}
