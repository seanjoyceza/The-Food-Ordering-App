import React, { useReducer } from "react"; //going with useReducer as state is a bit more complex

import UserCartContext from "./user-cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem; //take the old item in the items array and update it with the new item
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return { items: updatedItems, totalAmount: updatedTotalAmount };
    } else if (action.type === "REMOVE") {
        let updatedItems;
        for (let i = 0; i < state.items.length; i++) {
            if (action.id === state.items[i].id) {
                if (state.items[i].amount > 1) {
                    const updatedTotalAmount =
                        state.totalAmount - state.items[i].price * 1;
                    const updatedAmount = state.items[i].amount - 1;
                    updatedItems = [...state.items];
                    updatedItems[i].amount = updatedAmount; //take the old item in the items array and update it with the new item
                    return {
                        items: updatedItems,
                        totalAmount: updatedTotalAmount,
                    };
                } else {
                    let updatedTotalAmount =
                        state.totalAmount - state.items[i].price * 1;
                    function isMinusZero(value) {
                        return 1 / value === -Infinity;
                    }
                    if (isMinusZero && state.items.length === 1) {
                        updatedTotalAmount = 0;
                    }
                    isMinusZero(0); // false
                    isMinusZero(-0); // true
                    updatedItems = [...state.items];
                    updatedItems.splice(i, 1);
                    return {
                        items: updatedItems,
                        totalAmount: updatedTotalAmount,
                    };
                }
            }
        }

        // const existingCartItemIndex = state.items.findIndex(
        //     (item) => item.id === action.id
        // );
        // const existingItem = state.items[existingCartItemIndex];
        // const updatedTotalAmount = state.totalAmount - existingItem.price;
        // let updatedItems;
        // if (existingItem.amount === 1) {
        //     updatedItems = state.items.filter((item) => item.id !== action.id);
        // } else {
        //     const updatedItem = {
        //         ...existingItem,
        //         amount: existingItem.amount - 1,
        //     };
        //     updatedItems = [...state.items];
        //     updatedItems[existingCartItemIndex] = updatedItem;
        // }
        // return { items: updatedItems, amount: updatedTotalAmount };
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
