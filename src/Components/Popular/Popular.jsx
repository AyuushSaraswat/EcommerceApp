import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((value,i)=>{
            return <Item key={i}  id={value.id}  name={value.name} image={value.image} new_price={value.new_price} old_price={value.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
