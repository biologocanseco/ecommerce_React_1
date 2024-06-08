import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const [expandir, setExpandir] = useState(false);

  const handleMouseOver = () => {
    setExpandir(true);
  };

  const handleMouseLeave = () => {
    setExpandir(false);
  };

  const estiloCard = {
    transform: expandir ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.4s ease-in-out"
  };

  return (
    <div
      className="item"
      style={estiloCard}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="image-item"
        src={product.image}
        style={{ width: "200px" }}
      />
      <div className="content-item">
        <p>{product.name}</p>
        <p>Precio: {product.price}</p>
        <Link to={"/detail/" + product.id}>Ver Detalles</Link>
      </div>
    </div>
  );
};

export default Item;
