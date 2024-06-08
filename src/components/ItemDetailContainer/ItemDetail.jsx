import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext

 } from "../../context/CartContext"

const ItemDetail = ({product}) => {

  const { agregarProducto } = useContext(CartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count}
    agregarProducto(productCart)
  }

  return (
    <div style={{display: "flex"}}>
    <img style={{width: "500px"}}src={product.image} />
    <div>
    <p>{product.name}</p>
    <p>Precio: {product.price}</p>
    <p>{product.description}</p>
    <ItemCount stock={product.stock} addProduct={addProduct}/>

    </div>
  </div>
  )
}

export default ItemDetail