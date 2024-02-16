import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center p-5 md:p-10 lg:p-24" id="contact">
        <div className="bg-orange flex md:rounded-full py-10 px-20 w-full items-center justify-center">
          <div className="flex flex-col gap-5 w-full justify-center items-center text-center max-w-[670px]">
            <div className="heading text-white flex flex-col gap-2">
              <h1 className="font-pp_pangram_bold  text-3xl">Start learning new skills today and pursue your passion </h1>
              <p className="font-nunito">Join the community of global learners and start exploring today.</p>
            </div>
            <div className="form-details flex gap-4 font-nunito flex-wrap w-full lg:px-10">
              <input type="email" name="email" placeholder="Enter your email" className="border flex flex-1  border-white rounded-full bg-orange placeholder-white indent-2.5" />
              <button className="rounded-full bg-white py-2 px-4 text-sm font-bold text-orange flex items-center gap-2">GET STARTED <FaRegArrowAltCircleRight /></button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
