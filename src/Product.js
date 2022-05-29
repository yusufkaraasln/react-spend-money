import React from "react";
import "./style.scss"
function Product({ product, basket, setBasket ,total,money}) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );

    currentBasket.amount -= 1;

    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <>
      <div className="product">
          <img src={product.image} alt="" />
        <h3>{product.title}</h3>
        <div className="price">${product.price}</div>

        <div className="actions">
          <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sat</button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button className="buy-btn" disabled={total + product.price >money} onClick={addBasket}>Satın Al</button>
        </div>

      </div>
    </>
  );
}

export default Product;
