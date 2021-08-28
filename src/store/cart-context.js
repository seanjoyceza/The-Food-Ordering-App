import React from "react";

const CartContext = React.createContext({
    cartMeals: [
        {
            id: Math.random(),
            name: "",
            description: "",
            price: null,
        },
    ],
    modalState: () => {},
    setCartMeals: () => {},
});

export default CartContext;
