import { useState } from "react";
import Formulario from "./Formulario";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";
import validateForm from "../../utils/validationYup.js";
import { toast } from "react-toastify";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [idOrden, setIdOrden] = useState(null);

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    //Procedemos a darle formato a los datos a cargar
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };
    try {
      // validamos formulario antes de subir la orden
      const response = await validateForm(datosForm);
      if (response.status === "success") {
        //cargar los datos a firebase
        generateOrder(orden);
      } else {
        toast.warning(response.message)
    }
    } catch (error) {
      console.log(error);
    }
  };

  const generateOrder = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden)
      .then((respuesta) => setIdOrden(respuesta.id))
      .catch((error) => console.log(error))
      .finally(() => {
        // reduce el stock con los articulos comprados
        updateStock();
        // al ser subida la orden se hace el vaciado del carrito
        vaciarCarrito();
        toast.success("La compra se ha realizado con Exito")
      });
  };

  const updateStock = () => {
    carrito.map((productoCarrito) => {
      // guadamos la cantidad para posteriormente restarla del stok al finalizar la compra
      let quantity = productoCarrito.quantity;
      //borramos quantity
      delete productoCarrito.quantity;
      // declaramos la referencia la producto que deseamos modificar
      const productoRef = doc(db, "products", productoCarrito.id);
      setDoc(productoRef, {
        ...productoCarrito,
        stock: productoCarrito.stock - quantity,
      })
        .then(() => console.log("Stock actualizado correctamente"))
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      {idOrden ? (
        <div>
          <h2>Orden generada con Exito!! </h2>
          <p>id Orden: {idOrden}</p>
          <p>
            Favor de guardar el Id de su orden para futuro seguimiento y rastreo
          </p>
          <p>VideoJuegos CEX, Agradece su preferencia!!</p>
        </div>
      ) : (
        <Formulario
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;
