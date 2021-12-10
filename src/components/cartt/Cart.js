import { useContext } from "react"
import { contexto } from "../cart/CartContext"
import firebase from "firebase/app"
import { firestore } from "../firebase"
import { Link } from "react-router-dom"


const Cart = () => {

    const {clearCart, removeCart, cart} = useContext(contexto)

    const finalizarCompra = () =>{
        removeCart()
        const usuario = {
            Nombre : "Cosme",
            Apellido : "Fulanito",
            email : "cosme.fula@gmail.com",
            Telefono : "3372421",
        }

        const pedido = {
            buyer : usuario,
            items : cart,
            total : 1000,
            date : "08/12/2021"
        }

        const db = firestore
        const collection = db.collection("pedidos")
        const query = collection.add(pedido)

        query.then((resultado)=>{

        })
        
    }

    


   

    return (
        <div style={{color:"white"}}>


            {cart.map (item => (
                <article key={item.producto.id}>
                    <h3>{item.producto[0].name}</h3>
                    <img src={item.producto[0].image} alt={item.producto.name} />
                    <p>Total : {item.producto[0].price * item.cantidad} (cant: {item.cantidad})</p>
                </article>

                
            ))}

            <Link to="/"><button onClick={finalizarCompra}>Finalizar compra</button></Link>    
                    
            <button onClick={clearCart}>Eliminar productos</button>
            

        </div>
    
    )}

export default Cart
