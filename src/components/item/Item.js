import './item.css'
import { Link } from 'react-router-dom'



const Item = ({id, name, imgUrl, price, stock}) => {

    return (
        <div className="conte">
             <div className="card" key={id}>
            
            <img alt={name} src={imgUrl} className="item" />
            <h3>Nombre: {name}</h3>
            <h3 className="price">Precio: $ {price}</h3>
            <p className="stock">Stock : {stock}</p>
            <Link to={`/productos/${id}`}>Ver mas</Link>
            
        </div>


        </div>

    )
}

export default Item
