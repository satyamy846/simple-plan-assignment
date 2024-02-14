import ClassesImg from '../assets/classes_img.png';
import { FaStar } from "react-icons/fa";
const card_details = [{
    src:ClassesImg,
    discount:"60% OFF",
    language:"LANGUAGE",
    subheading:"Class name - Lorem ipsum sit elit varsit lectusi sit amet",
    author:"by John Doe",
    description:"Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
    price:"Rs1,499",
    userMessage: "Enroll Now",
    rating:"4.7"
},
{
    src:ClassesImg,
    discount:"60% OFF",
    language:"LANGUAGE",
    subheading:"Class name - Lorem ipsum sit elit varsit lectusi sit amet",
    author:"by John Doe",
    description:"Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
    price:"Rs1,499",
    userMessage: "Enroll Now",
    rating:"4.7"
},
{
    src:ClassesImg,
    discount:"60% OFF",
    language:"LANGUAGE",
    subheading:"Class name - Lorem ipsum sit elit varsit lectusi sit amet",
    author:"by John Doe",
    description:"Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
    price:"Rs1,499",
    userMessage: "Enroll Now",
    rating:"4.7"
},
{
    src:ClassesImg,
    discount:"60% OFF",
    language:"LANGUAGE",
    subheading:"Class name - Lorem ipsum sit elit varsit lectusi sit amet",
    author:"by John Doe",
    description:"Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
    price:"Rs1,499",
    userMessage: "Enroll Now",
    rating:"4.7"
},]

export default function ProductDetails() {
  return (
    <>
        <div className="" id="classes">
            <div className="heading">
                <div className="heading-left">
                    <h3>Discover classes</h3>
                    <p>SHOW ALL</p>
                </div>
                <div className="heading-right">
                    <p>Show prices in:</p>
                    <div className="btn-wrap">
                        <button>NOK</button>
                        <button>INR</button>
                    </div>
                </div>
            </div>
            <p>Choose from a variety of classes from around the world.</p>
            <div className="card-wrap">
                {
                    card_details.map((item) =>  (
                        <>
                            <div className="card">
                                <img src={item.src} alt="card-img"/>
                                <div className="content">
                                    <h2>{item.language}</h2>
                                    <h4>{item.subheading}</h4>
                                    <p>{item.rating}</p>
                                    <FaStar/>
                                    <p>{item.description}</p>
                                </div>
                                <div className="price-title">
                                    <p>{item.price}</p>
                                    <p>{item.userMessage}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}
