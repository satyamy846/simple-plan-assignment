import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import SellYourProductImg from '../assets/Footer/Rectangle 164.png';

const content_data = [
    {
        title: "Class Categories",
        items: ['Language', 'Cooking', 'Music', 'Arts & Craft', 'Yoga', 'Academic', 'Back To Roots', 'Funteresting']
    },

    {
        title: "Company",
        items: ['About', 'Careers', 'Blog', 'Contact', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy']
    },
    {
        title: "Learn",
        items: ['All Classes']
    },
    {
        title: "Teach",
        items: ['Become A Teacher']
    },
]

export default function Footer() {
  return (
    <>
        <footer className='bg-lightblue mt-10 px-24 py-10' id='footer'>
            <div className="footer-container flex flex-col gap-5 ">
                <div className="footer-heading-top flex justify-between gap-2 items-center flex-wrap lg:flex-nowrap">
                    <div className="contents-wrapper flex gap-10 flex-1">
                        {content_data.map((data) => (
                            <>
                                <div className="flex flex-col gap-1 flex-1">
                                <h2 className="font-pp_pangram_bold text-primary text-lg pb-1">{data.title}</h2>
                                {
                                    data.items.map((item) => (
                                        <>
                                            <p className="text-simpleplan_lightblue font-medium font-nunito">{item}</p>
                                        </>
                                    ))
                                }
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="image-wrapper object-cover overflow-hidden rounded font-nunito">
                        <img src={SellYourProductImg} alt="sell-your-product-img" className="w-full h-full"/>
                        <p className="bg-white text-primary text-center py-1 px-3 font-semibold">SELL YOUR PRODUCTS WITH US</p>
                    </div>
                </div>
                <hr className="bg-lightblue"/>
                {/* Copyright */}
                <div className="footer-bottom flex justify-between items-center text-simpleplan_lightblue font-nunito">
                    
                    <p className="font-light ">© Project 2021. All rights reserved.</p>
                        <p>Made with ❤ by SimplePlan</p>
                    <div className="social-handlers flex justify-between items-center gap-2">
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaLinkedin/>
                        <FaTwitter/>
                        <FaYoutube/>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
