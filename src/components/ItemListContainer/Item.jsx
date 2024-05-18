import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="item">
    <img className="image-item"
    src={product.image} style={{width: "200px" }}/>
    <p>{product.name}</p>
    <p>Precio: {product.price}</p>
    <Link to={"/detail/" + product.id } >Ver Detalles</Link>
    

  </div >
  )
}

export default Item