import React, { useState } from "react";
import { addStock, deleteStock } from "../features/userSlice";
import "./Card.css";
import { useDispatch } from "react-redux";

const Card = ({ stock, key, present }) => {
  //Setting the color depending on Stock Price
  let color = stock[1] >= stock[2] ? "green" : "red";
  const dispatch = useDispatch();
  const [style, setStyle] = useState({ display: "none" });

  // Handing The Add Button
  const handleBtnAdd = (stock) => {
    dispatch(addStock(stock));
  };

  // Handing The Delete Button
  const handleBtnDelete = (stock) => {
    dispatch(deleteStock(stock));
  };

  return (
    <li key={key}>
      {/* Setting style to block or none on hovering */}
      <div
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <div className="main-heading" style={{ color: `${color}` }}>
          <span>{stock[0].split("::")[0]}</span>
          <span> {stock[1]}</span>
        </div>
        <div className="secondary-heading">
          <span className="stock-exchange">{stock[0].split("::")[1]}</span>
          <span>
            {/** Depending on the color showing Up arrow icon or Down Arrow icon */}
            {color === "green" && (
              <i
                className="fas fa-sort-up fa-lg arrow"
                style={{ color: `${color}` }}
              ></i>
            )}
            {color === "red" && (
              <i
                className="fas fa-sort-down fa-lg arrow"
                style={{ color: `${color}` }}
              ></i>
            )}
            {Math.round(((stock[1] - stock[2]) / stock[2]) * 100) / 100}%
          </span>
        </div>
        <span style={style} className="option-panel">
          {/* Depending on the value of present either showing add button or delete button */}
          {present && (
            <i
              className="far fa-trash-alt btn btn-delete"
              onClick={() => handleBtnDelete(stock)}
            ></i>
          )}
          {!present && (
            <i
              className="fas fa-plus btn btn-add"
              onClick={() => handleBtnAdd(stock)}
            ></i>
          )}
        </span>
      </div>
    </li>
  );
};

export default Card;
