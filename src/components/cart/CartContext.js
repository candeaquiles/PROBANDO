import { createContext, useState } from "react";

export const contexto = createContext();


const { Provider } = contexto;
const CartContext = ({ children }) => {
 
    const [cart, setCart] = useState([]);
   
    const addToCart = (producto, cantidad) => {
    setCart([...cart, { producto, cantidad }]);
  };

  const removeCart = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
  }
  
  const clearCart = () =>{
    setCart([]);
  }

  const valorDeContexto = {
    cart: cart,
    addToCart: addToCart,
    removeCart: removeCart,
    clearCart: clearCart
  };
  return (
    <div>
      <Provider value={valorDeContexto}>{children}</Provider>
    </div>
  );
};
export default CartContext
