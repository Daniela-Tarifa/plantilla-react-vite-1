import {useState, useEffect} from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
const [products, setProducts] = useState([])
const {category} = useParams();

useEffect(() => {
    getProducts(category)
    .then((data) => {setProducts(data)})
    .catch((err) => {
        console.log(err);
    });
}, [category]) //el [] sirve q para q el useEffect este atento a algo en este caso a category, recordar q useEffect solo se dispara una vez
    return (
        <section>
            <h1>Bienvenidos</h1>
            <div className="productos-panaderia-grid">
                <ItemList list={products}/>
            </div>
            
        </section>
    );
};