import { useEffect, useState } from "react";
import Basket from "./Basket";
import Header from "./Header";
import Product from "./Product";
import products from "./products.json";
import "./style.scss"

function App() {
  const [money, setMoney] = useState(100000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header total={total} setTotal={setTotal} money={money}></Header>
      <div className="container">
      {products.map((product, i) => (
        <Product
          key={i}
          basket={basket}
          setBasket={setBasket}
          product={product}
          money={money}
          total={total}
        ></Product>
      ))}
      </div>
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          basket={basket}
          total={total}
          products={products}
        ></Basket>
      )}
    </>
  );
}

export default App;
