import { useContext } from "react"
import { currencyFormatter } from "../util/CurrrencyFormatter"
import Button from "./UI/Button"
import CartContext from "../store/CartContext"

export default function MealItem({ meal }) {
    const cartContext = useContext(CartContext);

    function handleAddItem() {
        cartContext.addItem(meal);
    }

    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddItem}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}