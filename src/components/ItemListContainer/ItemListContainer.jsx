import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

import "./itemlistcontainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    const productsRef = collection(db, "products");
    getDocs(productsRef)
    .then((productsDb) => {

      // lineas para darle formato a la data recibida de firebase
      const data= productsDb.docs.map((product)=>{
        return {id: product.id, ...product.data()}
      })

      setProducts(data)
    });
  };

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category","==", idCategory))
    getDocs(q)
    .then((productsDb) => {

      // lineas para darle formato a la data recibida de firebase
      const data= productsDb.docs.map((product)=>{
        return {id: product.id, ...product.data()}
      })

      setProducts(data)
    });
  }

  useEffect(() => {
    if(idCategory){
      getProductsByCategory();
    }else {
      getProducts();
    }

  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h2 className="title-item-list-container">
        {" "}
        {idCategory
          ? `Juegos para consola ${idCategory}`
          : "Bienvenidos a Cex Juegos"}{" "}
      </h2>
      {loading ? <div>Cargando......</div> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
