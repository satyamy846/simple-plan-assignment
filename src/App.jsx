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

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ExplorePanel/>
      <ProductDetails/>
      <Category/>
      <Reasons/>
      <Community/>
      {/* Teachers Carousel */}
      <TeacherPromotion/>
      <BlogsPage/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
