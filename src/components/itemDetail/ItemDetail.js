import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { contexto } from "../cart/CartContext";
import { useNavigate } from "react-router";
import { useState } from "react";




const ItemDetail = ({ productos }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(contexto);
 const [mostrar, setMostrar] = useState(false)
  

  const onAdd = (cantidad) => {
    addToCart(productos, cantidad);
    setMostrar(!mostrar);    
  }

  const red = () =>{
    navigate("/cart");
  }


    return (
        <div>
          {productos.map((producto) => {
            return (
              <div key={producto.id}>
                <img src={producto.image} alt={producto.name} />
                <h3>Nombre : {producto.name}</h3>
                <h3>Precio: $ {producto.price}</h3>
                <p>Stock: {producto.stock}</p>
               
                <ItemCount id={producto.id} stock={producto.stock} onAdd={onAdd} />
                {mostrar && <button onClick={red}>Ver el carrito </button>}
              </div>
            );
          })}
        </div>
      );
    
  
  
}

export default ItemDetail;