import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, vaciarCarrito, borrarProductoPorId, precioTotal } =
    useContext(CartContext);

  // retorno temprano
  if (carrito.length === 0) {
    return (
      <div>
        <h1>EL CARRITO DE COMPRAS ESTA VACIO</h1>
        <Link to="/">Ver Juegos</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Carrito de Productos</h1>
      {carrito.map((productoCarrito) => (
        <div
          key={productoCarrito.id}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <img src={productoCarrito.image} width={100} alt="" />
          <h3>{productoCarrito.name}</h3>
          <h3>cantidad: {productoCarrito.quantity}</h3>
          <h3>precio unitario: {productoCarrito.price}</h3>
          <h3>subtotal: {productoCarrito.price * productoCarrito.quantity}</h3>
          <button onClick={() => borrarProductoPorId(productoCarrito.id)}>
            Eliminar
          </button>
        </div>
      ))}
      <h2>Total de la Compra: $ {precioTotal()}</h2>
      <Link to="/checkout">Continuar con la Compra</Link>
      <button onClick={vaciarCarrito}>Eliminar Todos</button>
    </div>
  );
};

export default Cart;
