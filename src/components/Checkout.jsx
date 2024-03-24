import { useContext } from "react";
import { currencyFormatter } from "../util/CurrrencyFormatter";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { UserProgressContext } from "../store/UserProgressContext";
import CartContext from "../store/CartContext";
import Modal from "./Modal";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotalPrice = cartCtx.items.reduce((prevPrice, item) => {
        return prevPrice + item.price * item.quantity;
    }, 0)

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'}>
            <form>
                <h2>Checkout</h2>
                <p>Total amount : {currencyFormatter.format(cartTotalPrice)}</p>
                <Input label="Full Name" type="text" id="full-name" />
                <Input label="E-mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <Input label="Postal Code" type="number" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>
                <p className="modal-actions">
                    <Button textonly={true} onClick={handleClose}>Close</Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}