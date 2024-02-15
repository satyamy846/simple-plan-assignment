import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Contact() {
  return (
    <>
        <div className="flex justify-center items-center" id="contact">
          <div className="bg-[#FB7356] rounded-full py-10 px-20 w-[1100px]"> 
            <div className="flex flex-col gap-5 w-full justify-center items-center text-center">
            <div className="heading text-[#fff] flex flex-col gap-2">
            <h1 className="font-bold  text-3xl">Start learning new skills today and pursue your passion </h1>
              <p>Join the community of global learners and start exploring today.</p>
            </div>
              <div className="form-details flex gap-4">
              <input type="email" name="email" placeholder="Enter your email" className="border  border-[#fff] rounded-full bg-[#FB7356] placeholder-[#fff] indent-2.5"/>
              <button className="rounded-full bg-[#fff] py-2 px-4 text-sm font-bold text-[#FB7356] flex items-center gap-2">GET STARTED <FaRegArrowAltCircleRight/></button>
              </div>
            </div>
          </div>
            
        </div>
    </>
  )
}
