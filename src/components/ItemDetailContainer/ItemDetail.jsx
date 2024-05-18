const ItemDetail = ({product}) => {
  return (
    <div style={{display: "flex"}}>
    <img style={{width: "500px"}}src={product.image} />
    <div>
    <p>{product.name}</p>
    <p>Precio: {product.price}</p>
    <p>{product.description}</p>
    </div>
  </div>
  )
}

export default ItemDetail