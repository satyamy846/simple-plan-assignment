import { FaRegComment } from "react-icons/fa6";
import Img1 from '../assets/Blogs/Rectangle 8-1.png';
import Img2 from '../assets/Blogs/Rectangle 8-2.png';
import Img3 from '../assets/Blogs/Rectangle 8.png';

const blog_data = [
    {
        header:"CATEGORY 01",
        image_link:Img1,
        title:"Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
        message:"Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
        publish_name:"Publisher name",
        comments_count:"0"
    },
    {
        header:"CATEGORY 01",
        image_link:Img2,
        title:"Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
        message:"Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
        publish_name:"Publisher name",
        comments_count:"0"
    },
    {
        header:"CATEGORY 01",
        image_link:Img3,
        title:"Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
        message:"Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
        publish_name:"Publisher name",
        comments_count:"0"
    },
]

export default function BlogsPage() {
  return (
    <>
        <div className="flex flex-col gap-10 p-10 " id="blog">
            <div className="blog-heading flex gap-4 items-baseline justify-center">
                <h1 className="font-bold text-3xl text-primary">Our blogs</h1>
                <a href="" className="underline text-orange">SHOW ALL</a>
            </div>
            <div className="blog-cards-container flex gap-3 items-center justify-center flex-wrap lg:flex-nowrap">
                {blog_data.map((item) => (
                    <>
                        <div className="card flex flex-col gap-3 border border-lightgray shadow rounded w-[362px] p-3">
                            <div className="card-image w-full flex flex-col overflow-hidden object-contain relative">
                            <img src={item.image_link} alt="" className="w-full"/>
                            <a href="" className="block absolute top-2 left-3 rounded px-3 py-1 font-semibold  bg-[#FFF0F4] text-[#E25753]">{item.header}</a>
                            </div>
                            <div className="card-content">
                                <h6 className="font-semibold text-lg">
                                    {item.title}
                                </h6>
                                <p className="font-light">{item.message}</p>
                            </div>
                                <hr className="text-lightgray"/>
                            <div className="card-footer flex items-center justify-between">
                                <p className="text-primary font-semibold">{item.publish_name}</p>
                                <div className="flex items-center gap-1">
                                <FaRegComment/>
                                <span>{item.comments_count}</span>
                                </div>
                            </div>

                        </div>
                    </>
                ))}
            </div>
        </div>
    </>
  )
}
