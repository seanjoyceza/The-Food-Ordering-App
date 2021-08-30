import React, { useState, useEffect } from "react";

const CART_MEALS = [];

const CartContext = React.createContext({
    cartMeals: [],
    priceState: 0,
    setPriceState: () => {},
    modalState: () => {},
    setCartMeals: () => {},
    modalStateHandler: () => {},
});

export const CartContextProvider = (props) => {
    const [modalState, setModalState] = useState(false);
    const [cartMeals, setCartMeals] = useState(CART_MEALS);
    const [priceState, setPriceState] = useState(0);

    useEffect(() => {
        const showModal = localStorage.getItem("showModal");

        if (showModal === "1") {
            setModalState(true);
        }
    }, []);

    const modalStateHandler = () => {
        setModalState(() => {
            if (modalState === true) {
                localStorage.removeItem("showModal");
                return false;
            } else {
                localStorage.setItem("showModal", "1");
                return true;
            }
        });
    };

    return (
        <CartContext.Provider
            value={{
                priceState: priceState,
                setPriceState: setPriceState,
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
