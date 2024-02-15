import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import TeacherVector from '../assets/Teachers/Group 1082.png';
export default function TeacherPromotion() {
  return (
    <>
        <div className="teacher-promotion flex gap-3 p-10">
            <div className="image bg-mask-group">
                {/* SVG file */}
                <div>
                {/* <div className='bg-mask_group'>

                </div> */}
                <img src={TeacherVector} alt="teacher-vector" />

                </div>
            </div>
            <div className="content flex flex-col gap-4">
                <h2 className='text-primary font-bold text-2xl'>Become a Certified Teacher</h2>
                <p className='font-light '>We only have the best and trusted teachers from the globe. Join us if you have the skill and passion to share it.</p>
                <ul className='font-light list-square marker:text-orange  list-inside list-2xl'>
                    <li className=''>Make your own schedule</li>
                    <li className=''>Teach students on an international platform</li>
                    <li className=''>Become part of an international community of passionate educators</li>
                </ul>
                <div>
                <button className='bg-primary rounded-full text-white py-2 px-5 flex items-center gap-2'>START EXPLORING <FaRegArrowAltCircleRight className='inline'/></button>
                </div>
            </div>
        </div>
    </>
  )
}
