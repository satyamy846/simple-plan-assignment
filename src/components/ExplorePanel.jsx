import Artboard from '../assets/Artboard-27.png';
import PaymentVector from '../assets/payment-vector.png';
import SkilledVector from '../assets/skilled-vector.png';
import Studying from '../assets/Studying.png';

const explore_data = [{
    src: Artboard,
    heading:"Learn something new",
    message:"Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography."
},
{
    src: PaymentVector,
    heading:"Skilled & Passionate Teachers",
    message:"We offers Interactive classes by experts who are qualified and trusted."
},
{
    src: SkilledVector,
    heading:"Take classes anytime, anywhere",
    message:"Join sessions at your own convenience and pace, from the comforts of your home."
},
{
    src: Studying,
    heading:"Pay as you go",
    message:"No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe and secure with us."
}];

export default function ExplorePanel() {
  return (
    <>
        <div className="flex flex-col gap-8" id="explore ">
            <div className="explore-heading flex justify-center items-center">
                <h1 className='font-bold text-3xl text-primary'>Explore. Enroll. Have Fun. Repeat - here hobby meets happiness</h1>
            </div>
            <div className="explore-items-container flex gap-4 justify-between items-center text-center">
            {
                explore_data.map((item) => (
                    <>
                        <div className="explore-item flex flex-col justify-center items-center px-5" key={item.heading}>
                            <img src={item.src} alt="explore-img" />
                            <h4 className='font-semibold text-primary text-lg'>{item.heading}</h4>
                            <p>{item.message}</p>
                        </div>
                    </>
                ))
            }
            </div>
        </div>
    </>
  )
}
