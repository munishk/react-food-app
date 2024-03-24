import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/CurrrencyFormatter";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgresCtx = useContext(UserProgressContext);

    const cartTotalPrice = cartCtx.items.reduce((prevPrice, item) => {
        return prevPrice + item.price * item.quantity;
    }, 0)

    function handleClose() {
        userProgresCtx.hideCart();
    }

    function handleCheckout() {
        userProgresCtx.showCheckout();
    }

    return (
        <Modal className="cart" open={userProgresCtx.progress === 'cart'} onClose={userProgresCtx.progress === 'cart' ? handleClose: null}>
            <h2>Your cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} 
                    onIncrease={() => {cartCtx.addItem(item)}}
                    onDecrese={() => {cartCtx.removeItem(item.id)}}/>
                ))}
            </ul>
            <p className="cart-total">
                {currencyFormatter.format(cartTotalPrice)}
            </p>
            <p className="modal-actions">
                <Button textonly={true} onClick={handleClose}>Close</Button>
                <Button onClick={handleCheckout}>Go to Checkout</Button>
            </p>

        </Modal>
    )
}