import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Cosmetic Coquette"} />
      <ItemListContainer greeting={"Donde encontraras tus marcas de maquillaje favorito"}/>
    </>
  );
}
export default App;
