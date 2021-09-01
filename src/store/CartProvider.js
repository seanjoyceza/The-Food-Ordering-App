import React, { useReducer } from "react"; //going with useReducer as state is a bit more complex

import UserCartContext from "./user-cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;
        return { items: updatedItems, amount: updatedTotalAmount };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const userCartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <UserCartContext.Provider value={userCartContext}>
            {props.children}
        </UserCartContext.Provider>
    );
};

export default CartProvider;
