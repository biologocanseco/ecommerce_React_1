import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./cartwidget.css"

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

let cantidad = cantidadTotal()


  return (
    <Link to="/Cart" className={cantidad >=1 ? "cartwidget cart-white" : "cartwidget cart-red"}>
        <BsCart4 size={35}/>
        <p>{ cantidad >=1 && cantidad }</p>
    </Link>
  )
}

export default CartWidget