import { useState } from "react";
import { contexto } from "../cart/CartContext";
import { useContext } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, initial, confirmar, onAdd }) => {
  const [sumar, setRestar] = useState(1);

  const {removeCart} = useContext(contexto);

  const aumento = () => {
    sumar < stock && setRestar(sumar + 1);
   
  };
  const disminuir = () => {
   sumar > 0 && setRestar(sumar - 1)
  removeCart(initial)
  };
  const efectuar = () => {
    onAdd(sumar);
  };
  return (
    <div>
      <p>Usted tiene {sumar} producto(s) en su carrito</p>
      <button className="outline" onClick={aumento}>
        Agregar
      </button>
      <button className="outline" onClick={disminuir}>
        Quitar
      </button>
      <button className="outline" onClick={efectuar}>
        Confirmar
      </button>
    </div>
  );
};

export default ItemCount;

