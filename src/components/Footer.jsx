import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const categories = [
    {
        name: "Language",
    },
    {
        name: "Cooking",
    },
    {
        name: "Music",
    },
    {
        name: "Arts & Craft",
    },
    {
        name: "Yoga",
    },
    {
        name: "Academic",
    },
    {
        name: "Back To Roots",
    },
    {
        name: "Funteresting",
    },

]

export default function Footer() {
  return (
    <>
        <footer className='' id='footer'>
            <div className="footer-container">
                <div className="footer-details">
                    <div className="class-categories">
                        <h2>Class Categories</h2>
                        {
                            categories.map((item) => (
                                <>
                                    <p>{item.name}</p>
                                </>
                            ))
                        }
                    </div>
                    <div className="company">
                            
                    </div>
                    <div className="learn">

                    </div>
                    <div className="teach">

                    </div>
                    <div className="sell-product">
                        <img src="" alt="" />
                        <p>sell your products with us</p>
                    </div>
                </div>
                {/* Copyright */}
                <div>
                    <p>© Project 2021. All rights reserved.</p>
                    <p>Made with ❤ by SimplePlan</p>
                    <div className="social-handlers">
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
