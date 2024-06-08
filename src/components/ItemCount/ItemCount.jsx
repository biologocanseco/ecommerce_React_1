import { useState } from "react";

import "./itemcount.css";

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleClickAddToCart = () => {
    addProduct(count)
  };

  return (
    <div className="itemcount">
      <div className="controls-itemcount">
        <button className="button-controls" onClick={handleClickDecrement} >-</button>
        <p>{count}</p>
        <button className="button-controls" onClick={handleClickIncrement}>+</button>
      </div>
      <button className="submit-itemcount" onClick={handleClickAddToCart}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;
