import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import imgControl1 from "./assets/control1.jpg";

function App() {
  const saludo = "Hola Mundo, como estas";

  // Estilos como objeto
  const styleh1 = {
    color: "red",
    backgroundColor: "lime",
  };

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = "Bienvenido al ecommerce"/>

    </div>
  );
}

export default App;
