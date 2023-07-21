import Cart from "../../../assets/icons/cart.png";
import "./style.css";

function CartWidget() {
    return (
        <div className="cart">
            <img src={Cart} alt="cart" className="cart-icon" />
            <p>4</p>
        </div>
    );
}

export default CartWidget;