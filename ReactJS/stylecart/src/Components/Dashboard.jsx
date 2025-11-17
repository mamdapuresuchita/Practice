import React, { useContext } from 'react'
import ProductList from './ProductList'
import ThemeContext from '../hooks/ThemeContext'


const Dashboard = () => {
  
  
  const {darkMode} = useContext(ThemeContext);

  const dashboardColor ={
    background: darkMode? "gray" :"linear-gradient(90deg, #dbd2f5ff, #f8aacaff)",
  }


  return (
    <>
    <div className=' p-5' style={dashboardColor}>

         
<ProductList />
    </div>
    
    </>
  )
}

export default Dashboard