import "./App.css";
import Navbar from "./components/Navbar";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />"
      <ItemDetail id="1" pictureURL="manaospetroleo.jpg" title="Manaos Petroleo" itemInfo="SI alguna vez te preguntaste como seria si fumar fuera una bebida te invitamos a comprar esta gaseosa" stock="10" price="150"/>
      <Routes>
        <Route path="/" />
        <Route path="/products" />
        <Route path="/contact" />
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;