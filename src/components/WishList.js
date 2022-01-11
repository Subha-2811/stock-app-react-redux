import React from "react";
import { useSelector } from "react-redux";
import { selectWishList } from "../features/userSlice";
import Card from "./Card";
import "./WishList.css";

const WishList = () => {
  let wishlist = useSelector(selectWishList);

  // Returns card component for each stock present in wishlist
  const renderList = (stock, key) => {
    // Checks if stock is already present in wishlist
    let present = wishlist.includes(stock);
    return <Card stock={stock} key={key} present={present} />;
  };
  return (
    <>
      <div className="user">
        <span className="name">Subhajyoti</span>
        <span>
          <i className="fas fa-pen fa-lg icon"></i>
          <i className="far fa-trash-alt fa-lg btn-delete icon"></i>
        </span>
      </div>
      {/* Mapping through each stock in Wishlist and displaying it*/}
      <ul className="wishlist">
        {wishlist.map((stock, key) => renderList(stock, key))}
      </ul>
    </>
  );
};

export default WishList;
