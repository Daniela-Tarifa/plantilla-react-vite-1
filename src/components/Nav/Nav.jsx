import { Link } from "react-router-dom";
import {useCartContext} from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
    const {getTotalItems} = useCartContext();

    return (
    <nav>
        <ul className="nav-bar-sin-burger-menu">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"./category/dulce"}>Dulce</Link>
            </li>
            <li>
                <Link to={"./category/salado"}>Salado</Link>
            </li>
            <li className="cart-container">
                <Link to={"/carrito"}>Carrito
                {getTotalItems() > 0 && (
                    <span className="in-cart">{getTotalItems()}</span>
                )}
                </Link>
            </li>
        </ul>


        <div className="burger-menu" >
            <input type="checkbox" id="menu"/>
            <label htmlFor="menu"> <i className="fa fa-bars burger"></i> </label>


            <ul className="burger-menu2">
                <li className="desplegableM">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="desplegableM">
                    <Link to={"./category/dulce"}>Dulce</Link>
                </li>
                    
                <li className="desplegableM">
                    <Link to={"./category/salado"}>Salado</Link>
                </li>
                <li className="desplegableM cart-container">
                    <Link to={"/carrito"}>Carrito
                    {getTotalItems() > 0 && (
                        <span className="in-cart">{getTotalItems()}</span>
                    )}
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    );
};