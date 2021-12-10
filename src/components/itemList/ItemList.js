import Item from "../item/Item"
import './itemList.css'


const ItemList = (props) => {

    return (
        
        <div className="itemList">
            {
                props.productos.map((producto) => {
                    return (
                        <Item key={producto.id} id={producto.id} name={producto.name} imgUrl={producto.image} price={producto.price} stock={producto.stock}/>
                    )
                })
            }
            
        </div>
    )
}

export default ItemList
