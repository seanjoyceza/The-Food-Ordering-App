import React, { useContext } from "react";
import CartIcon from "../CartIcon";
import CartContext from "../../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
    const cartCtx = useContext(CartContext);

    let cartNumber = 0;
    if (cartCtx.cartMeals.length > 0) {
        for (let i = 0; i < cartCtx.cartMeals.length; i++) {
            cartNumber = cartNumber + cartCtx.cartMeals[i].amount;
        }
    }

    return (
        <button
            key={cartCtx.cartMeals} //Adding a key will make react think it's a different div when the key changes, so it'll unmount it and mount again
            className={`${classes.button} ${classes.bump}`}
            onClick={cartCtx.modalStateHandler}
        >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {cartCtx.cartMeals.length > 0 && cartNumber}
                {cartCtx.cartMeals.length === 0 && 0}
            </span>
        </button>
    );
};

export default HeaderCartButton;
