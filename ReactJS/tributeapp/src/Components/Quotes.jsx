import React, { useCallback, useState, useContext } from 'react'
import ThemeContext from '../Context/ThemeContext';

const quotes = [
  "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
  "If you want to shine like a sun, first burn like a sun.",
  "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
  "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.",
  "Excellence is a continuous process and not an accident.",
  "Man needs his difficulties because they are necessary to enjoy success.",
  "To succeed in your mission, you must have single-minded devotion to your goal.",
  "Let us sacrifice our today so that our children can have a better tomorrow.",
  "Thinking is the capital, enterprise is the way, and hard work is the solution.",
  "You have to dream before your dreams can come true."
]

const Quotes = () => {

  const [index,setIndex] = useState(0);

  const nextQuote = useCallback(()=>{
    setIndex((prev) => (prev +1) % quotes.length)
  },[])

  const { darkMode } = useContext (ThemeContext);

const quoteGradient = {
  background: darkMode
    ? "linear-gradient(135deg, #141e30, #243b55)" // deep navy blue
    : "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
  color: darkMode ? "white" : "#dde5f4ff",
  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
};


  
  return (
    <div className='text-center m-4'><h1 className='mb-5'>Inspiration Quotes</h1>
    <div className="quoteSection border rounded-pill p-3" style={quoteGradient}


>
    <p className='mt-4'>"{quotes[index]}"</p>
    <button className=' btn btn-warning mt-3 rounded-pill px-4' onClick={nextQuote}>Next Quote</button>
    <div className='mt-2 ' style={{fontSize:"10px"}}>{index+1}/{quotes.length}</div>
    </div>
    </div>
    
  )
}

export default Quotes