import image1 from '../assets/Categories/image-1.png';
import image2 from '../assets/Categories/image-2.png';
import image3 from '../assets/Categories/image-3.png';
import image4 from '../assets/Categories/image-4.png';
import image5 from '../assets/Categories/image-5.png';
import image6 from '../assets/Categories/image-6.png';
import image7 from '../assets/Categories/image-7.png';
import image8 from '../assets/Categories/image-8.png';

const card_data = [{
    src:image1,
    category_name:"Language"
},
{
    src:image2,
    category_name:"Cooking"
},
{
    src:image3,
    category_name:"Music"
},
{
    src:image4,
    category_name:"Arts & Craft"
},
{
    src:image5,
    category_name:"Yoga"
},
{
    src:image6,
    category_name:"Academics"
},
{
    src:image7,
    category_name:"Back to Roots"
},
{
    src:image8,
    category_name:"Funteresting"
},]

export default function Category() {
  return (
    <>
        <div className='' id="category">
            <h1>Browse by category</h1>
            <div className="card-container">
                {
                    card_data.map((item) => (
                        <>
                            <div className="card">
                                <img src={item.src} alt="category-img" />
                                <h4>{item.category_name}</h4>
                                <hr />
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}
