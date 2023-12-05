import { ItemListContanier } from "./components/ItemListContainer/ItemListContanier";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContanier greeting={"Bienvenidos ! - mensaje enviado por parametro"} />
    </>
  );
};