import { FaRegComment } from "react-icons/fa6";


const blog_data = [
    {
        header:"CATEGORY 01",
        image_link:"",
        title:"Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
        message:"Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
        publish_name:"Publisher name",
        comments_count:"0"
    },
    {
        header:"CATEGORY 01",
        image_link:"",
        title:"Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
        message:"Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
        publish_name:"Publisher name",
        comments_count:"0"
    },
    {
        header:"CATEGORY 01",
        image_link:"",
        title:"Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
        message:"Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
        publish_name:"Publisher name",
        comments_count:"0"
    },
]

export default function BlogsPage() {
  return (
    <>
        <div id="blog">
            <div className="blog-heading">
                <h1>Our blogs</h1>
                <a href="">SHOW ALL</a>
            </div>
            <div className="blog-cards-container">
                {blog_data.map((item) => (
                    <>
                        <div className="card">
                            <div className="card-image">
                            <a href="">{item.header}</a>
                            <img src="" alt="" />
                            </div>
                            <div className="card-content">
                                <h6>
                                    {item.title}
                                </h6>
                                <p>{item.message}</p>
                            </div>
                            <hr />
                            <div className="card-footer">
                                <p>{item.publish_name}</p>
                                <FaRegComment/>
                                <span>{item.comments_count}</span>
                            </div>

                        </div>
                    </>
                ))}
            </div>
        </div>
    </>
  )
}
