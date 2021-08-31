import React, { useState, useEffect } from "react";

const CART_MEALS = [];

const CartContext = React.createContext({
    cartMeals: [],
    priceState: 0,
    cartNumber: 0,
    updateTotal: () => {},
    updateCartNumber: () => {},
    setCartNumber: () => {},
    setPriceState: () => {},
    modalState: () => {},
    setCartMeals: () => {},
    modalStateHandler: () => {},
    onAddHandler: () => {},
    onRemoveHandler: () => {},
});

export const CartContextProvider = (props) => {
    const [modalState, setModalState] = useState(false);
    const [cartMeals, setCartMeals] = useState(CART_MEALS);
    const [priceState, setPriceState] = useState(0);
    const [cartNumber, setCartNumber] = useState(0);

    useEffect(() => {
        const showModal = localStorage.getItem("showModal");

        if (showModal === "1") {
            setModalState(true);
        }
    }, []);

    const updateTotal = (meals) => {
        let totalPrice = 0;
        for (let meal of meals) {
            totalPrice += meal.amount * meal.price;
        }
        setPriceState(totalPrice.toFixed(2));
        return;
    };

    const updateCartNumber = (meals) => {
        let totalAmount = 0;
        for (let meal of meals) {
            totalAmount += meal.amount;
        }
        setCartNumber(totalAmount);
        return;
    };

    const onAddHandler = (event) => {
        const currentItem =
            event.target.parentNode.parentElement.firstElementChild.children[0]
                .outerText;
        for (let meal of cartMeals) {
            if (currentItem === meal.name) {
                meal.amount += 1;
            }
        }
    };

    const onRemoveHandler = (event) => {
        const currentItem =
            event.target.parentNode.parentElement.firstElementChild.children[0]
                .outerText;
        for (let meal of cartMeals) {
            if (currentItem === meal.name) {
                meal.amount -= 1;
            }
        }
    };

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
                cartNumber: cartNumber,
                setCartNumber: setCartNumber,
                priceState: priceState,
                setPriceState: setPriceState,
                cartMeals: cartMeals,
                modalStateHandler: modalStateHandler,
                modalState: modalState,
                setCartMeals: setCartMeals,
                updateTotal: updateTotal,
                updateCartNumber: updateCartNumber,
                onAddHandler: onAddHandler,
                onRemoveHandler: onRemoveHandler,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
