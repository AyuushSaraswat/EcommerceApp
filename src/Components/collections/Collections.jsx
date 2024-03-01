import React from "react";
import new_collections from '../Assets/new_collections'
import Item from "../Item/Item";
import './Collections.css'

export default function Collections() {
  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((value,i)=>{
            return  <Item key={i}  id={value.id}  name={value.name} image={value.image} new_price={value.new_price} old_price={value.old_price}/>
        })}

      </div>
    </div>
  );
}
