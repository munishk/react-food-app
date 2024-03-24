import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { UserProgressContext } from '../store/UserProgressContext';

export default function Header() {
    const cartContext = useContext(CartContext);
    const userProgressCtx =  useContext(UserProgressContext);

    const totalQuantity = cartContext.items.reduce((previousCount, item) => {
        return previousCount + item.quantity;
    }, 0);

    function handleButtonClick() {
        userProgressCtx.showCart();
    }


    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Restaurent image" />
                <h1>Aaru's Restaurent</h1>
            </div>
            <nav>
                <Button textonly={true} onClick={handleButtonClick}>{`Cart (${totalQuantity})`}</Button>
            </nav>
        </header>
    )
}