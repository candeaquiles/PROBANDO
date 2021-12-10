import './cardWidget.css'
import { contexto } from '../cart/CartContext'
import { useContext } from 'react'

export const CardWidget = () => {

    const {cart} = useContext(contexto)
   
    return (
        
        <div>
            
                <span id="spanCard" className="material-icons">
                shopping_cart
                </span>
                <div style={{color:"white"}}>{cart.length} </div>
            
        </div>
        
    )
}
