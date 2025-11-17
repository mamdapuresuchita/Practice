import React from 'react'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

const Hero = () => {
  return (
    <>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={hero1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={hero2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={hero3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className= "carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}

export default Hero