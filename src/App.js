import React from "react";
import Banners from "./components/Banners";
import Promocion from "./components/Promocion";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <Banners />
      <Promocion />
      <Footer />
    </div>
  );
}

export default App;
