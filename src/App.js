import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import CartContext from "./components/cart/CartContext";
import Cart from "./components/cartt/Cart";



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <CartContext>
        <Header />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        </CartContext>
      </BrowserRouter>

    </div>
  );
}


export default App;