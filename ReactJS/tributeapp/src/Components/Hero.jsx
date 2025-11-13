import React, { useEffect } from 'react'

const Hero = () => {

    useEffect(()=>{
        console.log("Hero Section Mounted");
    },[])

  return (
    <div className='text-center'>
        <img
        src="https://tse3.mm.bing.net/th/id/OIP.FC-EE-iBSE3LA2vp76eZ2QHaEc?pid=Api&P=0&h=180"
        alt="Dr. A.P.J. Abdul Kalam"
        className="rounded-3 shadow mb-3 "
        width="300"
        height="300"
      />
     </div>
  )
}

export default Hero