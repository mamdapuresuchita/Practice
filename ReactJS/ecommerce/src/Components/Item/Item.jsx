import React from 'react'
import "./Item.css"

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className="itemPrice">
            <div className="newPrice">{props.new_price}</div>
            <div className="oldPrice">{props.old_price}</div>
        </div>
    </div>
  )
}

export default Item