import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <>
          <nav className='flex items-center justify-between w-full h-16 bg-white shadow py-2 px-36  font-nunito'>
              <div className='h-full flex justify-between items-center gap-10 text-primary'>
                  <h2 className='font-bold text-2xl'>Logo</h2>
                  <h4 className='flex items-center justify-center text-sm font-bold leading-none'>CATEGORIES <RiArrowDropDownLine /></h4>

              </div>
              <div className='flex justify-center items-center gap-5'>
                  <h3 className='text-primary'>TEACH</h3>
                  <button className="bg-opacity-0 border rounded-3xl py-2 px-4 font-bold text-primary">LOGIN</button>
                  <button className="bg-primary rounded-3xl py-2 px-4 font-bold text-[">SIGNUP</button>
              </div>
          </nav>
    </>
  )
}
