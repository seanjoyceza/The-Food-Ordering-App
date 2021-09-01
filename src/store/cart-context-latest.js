import React {useState} from "react";

const CartContextLatest = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContextLatest;
