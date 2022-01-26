import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection , getDocs , query , where } from "firebase/firestore"



const ItemListContainer = ({ producto }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {
        const listaDeItems = collection(db, "productos");
        const itemsFiltrados =
         id ==="combos"
           ? query(listaDeItems, where("categoria", "==", id))
           : id === "macetas"
           ? query(listaDeItems, where("categoria", "==", id))
           : listaDeItems;

        const pedido = getDocs(itemsFiltrados);
        pedido
            .then((resultado) => {
                setProductos (
                    resultado.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
                );
                setLoading(false);
            })
            .catch((error)=> {
                console.log(error);
            });
        }, [id]);

const onAdd = () => {};

return <ItemList productos={productos} />;
};

export default ItemListContainer;
    
