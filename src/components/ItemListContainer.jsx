import React from "react";
import CardsCat from "./cardCat/cardCat";


function ItemListContainer({ greeting }) {
  return (
    <>
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <br></br>
    </div>
    <CardsCat />
    </>
  );
}

export default ItemListContainer;
