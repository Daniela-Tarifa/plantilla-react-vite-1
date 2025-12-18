import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/products";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getProductById(id)
        .then((data) => {
            if(data){
              setDetail(data);
            }else{
              throw new Error("Producto no encontrado");
            }
        })    
        .catch((err) => {
        console.log(err);
      });
    }, [id]);

 return (
    <main className="detail-container">
      <h2 className="detail-container-titulo-h2" >Detalle</h2>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p className="item-panaderia-container-cargando" >Cargando...</p>
      )}
    </main>
 );

};