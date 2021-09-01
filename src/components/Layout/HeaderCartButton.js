import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import UserCartContext from "../../store/user-cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const userCartCtx = useContext(UserCartContext);

    const numberOfCartItems = userCartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const cartCtx = useContext(CartContext);

    return (
        <button
            key={cartCtx.cartMeals} //Adding a key will make react think it's a different div when the key changes, so it'll unmount it and mount again
            className={`${classes.button} ${classes.bump}`}
            onClick={props.onClick}
        >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
