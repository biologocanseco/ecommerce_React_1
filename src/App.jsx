import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";


function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = "Bienvenido al ecommerce"/>

    </div>
  );
}

export default App;
