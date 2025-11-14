import './App.css'
import Navbar from './Components/Navbar'
import ThemeProvider from './Context/ThemeProvider'
import Hero from './Components/Hero'
import Bio from './Components/Bio'
import Quotes from './Components/Quotes'
import Footer from './Components/Footer'
import Achievements from './Components/Achievements'
import Comments from './Components/Comments'
import { useEffect, useState } from 'react'
import { TiArrowUpOutline } from "react-icons/ti";

function App() {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowGoTop(true);
      else setShowGoTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Bio />
      <Quotes />
      <Achievements />
      <Comments />
      

      {showGoTop && (
        <button
          onClick={scrollToTop}
          className='goToTop'
          >
          <TiArrowUpOutline  size={25} />
        </button>
      )}
      <Footer />
    </ThemeProvider>
  )
}

export default App
