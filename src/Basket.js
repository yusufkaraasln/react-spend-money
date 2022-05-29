import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, products, total, resetBasket }) {
  return (
    <>
      <div className="dashboard">
      <div className="total">Toplam : ${total}</div>
        <div className="basket-item">
          {basket.map((item) => (
            <BasketItem
              product={products.find((p) => p.id === item.id)}
              item={item}
            ></BasketItem>
          ))}
        </div>

        
        <button className="reset-btn" onClick={resetBasket}>
          Sepeti Sıfırla
        </button>
      </div>
    </>
  );
}

export default Basket;
