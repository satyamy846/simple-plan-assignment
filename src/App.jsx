import './App.css'
import ExplorePanel from './components/ExplorePanel'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails';
import Category from './components/Category';
import Reasons from './components/Reasons';
import Community from './components/Community';
import TeacherPromotion from './components/TeacherPromotion';
import BlogsPage from './components/BlogsPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Teachers from './components/Teachers';
import { IoMdChatbubbles } from "react-icons/io";

function App() {

  return (
    <>
      <div className='relative'>
        <Navbar/>
        <HeroSection/>
        <ExplorePanel/>
        <ProductDetails/>
        <Category/>
        <Reasons/>
        <Community/>
        <Teachers/>
        <TeacherPromotion/>
        <BlogsPage/>
        <Contact/>
        <Footer/>
        <div className='fixed bottom-4 right-10 bg-primary text-white rounded-full p-3 z-10 cursor-pointer'>
          <IoMdChatbubbles/>
        </div>
      </div>
    </>
  )
}

export default App
