import React from "react";
import Banners from "./components/Banners";
import Promocion from "./components/Promocion";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";

const Pepe = () => {
  return (
    <h3>Soy Javier!</h3>
  )
};

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer titulo={"Bienvenidos a McDonals Argentina!"} comp1={<Pepe/>}/>
      <Banners />
      <Promocion />
      <Footer />
    </div>
  );
}

export default App;
