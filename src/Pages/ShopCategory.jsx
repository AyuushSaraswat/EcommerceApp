import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import arrow from '../Components/Assets/arrow.png'


const ShopCategory = (props) => {
const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shop-category-indexSort">
        <p><span>Showing 1-12</span> out of 36 products</p>
      <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((value, i) => {
          if (props.category === value.category) {
            return (
              <Item
                key={i}
                id={value.id}
                name={value.name}
                image={value.image}
                new_price={value.new_price}
                old_price={value.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        Explore More <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default ShopCategory;
