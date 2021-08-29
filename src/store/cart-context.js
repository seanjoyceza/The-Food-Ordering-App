import React, { useState, useEffect } from "react";

const CART_MEALS = [];

const CartContext = React.createContext({
    cartMeals: [],
    modalState: () => {},
    setCartMeals: () => {},
    modalStateHandler: () => {},
});

export const CartContextProvider = (props) => {
    const [modalState, setModalState] = useState(false);
    const [cartMeals, setCartMeals] = useState(CART_MEALS);

    const modalStateHandler = () => {
        setModalState(() => {
            if (modalState === true) {
                return false;
            } else {
                return true;
            }
        });
    };

    return (
        <CartContext.Provider
            value={{
                cartMeals: cartMeals,
                modalStateHandler: modalStateHandler,
                modalState: modalState,
                setCartMeals: setCartMeals,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
