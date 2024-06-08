import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (nuevoProducto) => {
    const condicion = estaEnElCarrito(nuevoProducto.id);
    if (condicion) {
      const ProductosModificados = carrito.map((productoCarrito) => {
        if (productoCarrito.id === nuevoProducto.id) {
          return {
            ...productoCarrito,
            quantity: productoCarrito.quantity + nuevoProducto.quantity,
          };
        } else {
          return productoCarrito;
        }
      });

      setCarrito(ProductosModificados);
    } else {
      setCarrito([...carrito, nuevoProducto]);
    }
  };

  const cantidadTotal = () => {
    const cantidadTotalProductos = carrito.reduce(
      (total, producto) => total + producto.quantity,
      0
    );
    return cantidadTotalProductos;
  };

  // Calcular precio Total
  const precioTotal= () => {
    const totalCompra = carrito.reduce( (total, productoCarrito)=> total + ( productoCarrito.price * productoCarrito.quantity ), 0 )
    return totalCompra
}

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // detectar duplicados
  const estaEnElCarrito = (idProducto) => {
    const condicion = carrito.some(
      (productoCarrito) => productoCarrito.id === idProducto
    );
    return condicion;
  };

// Para borrar un producto unico
const borrarProductoPorId = (idProducto) => {
    const productosFiltrados = carrito.filter((productoCarrito) => productoCarrito.id !== idProducto)
    setCarrito (productosFiltrados)
}



  return (
    <CartContext.Provider
      value={{ carrito, agregarProducto, cantidadTotal, vaciarCarrito, borrarProductoPorId, precioTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
