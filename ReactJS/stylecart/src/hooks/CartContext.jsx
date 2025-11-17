import React, { createContext, useState } from 'react'

const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cart,setCart] = useState([]);

    const addToCart=(product)=>{
        setCart((prev)=>{
            const existing = prev.find((item)=>item.id === product.id);
            if(existing){
                return prev.map((item)=>item.id===product.id?{...item,qty:item.qty + 1}:item);
            }
            return [...prev, {...product,qty:1}];
        })
    }

    const removeFromCart = (id)=>{
        setCart((prev)=>prev.filter((item)=>item.id !==id));
    }

    const clearCart=()=>setCart([]);

    const totalAmount=cart.reduce((sum,item)=> sum+item.price * item.qty, 0)

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,totalAmount}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext