import { useState } from "react"
import { useEffect } from "react"
import { firestore } from "../firebase"
import { useParams } from "react-router"
import ItemList from "../itemList/ItemList"


const ItemListContainer = () => {

    const [producto, setProducto] = useState([])
    const { id } = useParams()

    useEffect(()=>{
        
        firestore.collection("products").get()
        .then((firestore)=>{

                const data = firestore.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
                
            })
            if(id){
                setProducto(data.filter((item)=> item.categoria == id))
            }else{
                setProducto(data)
            }             
        })

    }, [id])
    


    return (
        <div>
        <ItemList productos={producto}/>
            
        </div>
    )
}

export default ItemListContainer

