import { currencyFormatter } from "../util/CurrrencyFormatter"
export default function CartItem({name, quantity, price, onIncrease, onDecrese}) {
    return (
        <li className="cart-item">
            <p>
                {name} - {quantity} * {currencyFormatter.format(price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrese}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>

        </li>
    )
}