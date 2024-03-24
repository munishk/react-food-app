import { useReducer } from "react";
import { createContext } from "react";


const CartContext = createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { }
})

function CartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const updatedCartItems = [...state.items];
        if (existingCartItemIndex === -1) {
        updatedCartItems.push({ ...action.item, quantity: 1 });
        } else {
            const existingCartItem = updatedCartItems[existingCartItemIndex];
            existingCartItem.quantity = existingCartItem.quantity + 1;
        }
        return {
            ...state,
            items: updatedCartItems
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingItemIndex = state.items.findIndex((item) => {
            item.id === action.id
        });

        const updatedCartItems = [...state.items];

        const existingCartItem = updatedCartItems[existingItemIndex];
        if (existingCartItem.count === 1) {
            updatedCartItems.splice(existingCartItemIndex, 1);
        } else {
            existingCartItem.count = existingCartItem.count - 1;
        }
        return  {
            ...state,
            items : updatedCartItems
        }
    }
}

export function CartContextProvider({ children }) {
   const [cart, dispatchCartAction] = useReducer(CartReducer, {
       items : []
    })

     function addItem(item) {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item
        })
     }

     function removeItem(id) {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id
        })
     }

     const cartContext = {
        items : cart.items,
        addItem,
        removeItem
     }

     console.log(cartContext);


    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
}

export default CartContext;