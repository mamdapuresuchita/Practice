import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ThemeProvider from "./hooks/ThemeProvider";
import Hero from "./Components/Hero";
import Dashboard from "./Components/Dashboard";
import ProductDetails from "./Components/ProductDetails";
import Footer from "./Components/Footer";
import CartContext from "./hooks/CartContext";
import Login from "./Pages/Login";
// import { useState } from "react";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import { CartProvider } from "./hooks/CartContext";

function App() {

  //  const [numberOfItems,setNumberOfItems]=useState(0);

  // const handleAddToCart=()=>{
  //   setNumberOfItems(prev => prev + 1);
  // }


  return (
    <>
      <ThemeProvider>
        <CartProvider>
        {/* <CartContext.Provider value={{numberOfItems,handleAddToCart}}>
         */}
         <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Dashboard />
                </>
              }
            />
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>

            {/* Product Details Page */}

            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
        {/* </CartContext.Provider> */}
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
