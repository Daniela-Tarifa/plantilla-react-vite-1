import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList =({list}) => {
    return (
    <>
    {list.length ? (
     list.map((prod) =>( 
        <Link to={`/detail/${prod.id}`}  key={prod.id}>
            <Item {...prod}/>
        </Link>))
     ): ( 
        <p className="item-panaderia-container-cargando">No hay productos</p> 
     )}
    </>
    );
};