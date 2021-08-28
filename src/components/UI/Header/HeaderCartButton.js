import React, { useContext } from "react";
import CartIcon from "../CartIcon";
import CartContext from "../../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
    const ctx = useContext(CartContext);

    return (
        <button className={classes.button} onClick={ctx.modalState}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {ctx.cartMeals.length ? ctx.cartMeals.length : 0}
            </span>
        </button>
    );
};

export default HeaderCartButton;
