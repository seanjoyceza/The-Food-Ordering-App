import UserCartContext, { useState } from "./user-cart-context";

const CartProvider = (props) => {
    const addDItemToCartHandler = (item) => {};

    const removeItemFromCartHandler = (id) => {};

    const userCartContext = {
        items: [],
        totalAmount: 0,
        addItem: addDItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <UserCartContext value={userCartContext}>
            {props.children}
        </UserCartContext>
    );
};

export default CartProvider;
