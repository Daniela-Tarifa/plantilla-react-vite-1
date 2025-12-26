import "./Item.css";

export const Item = ({name, price, description, imageUrl, children,  isDetail}) => {
    return (
    <article className="product-item">
        <div className="product-item-imagen">
            <img src={imageUrl} alt={description} />
        </div>
        
        <div className="product-item-panaderia-textos">
            <div className="product-item-panaderia-texto-principal">
                <h2 className="product-title">{name}</h2>
                <p>Precio: ${price}</p>
            </div> 
        <p className="item-panaderia-descripcion">Descripcion: {description}</p>
        {children}
        </div>
        
    </article>
);
};