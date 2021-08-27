import React from "react";
import CartIcon from "../CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const onClickHandler = (event) => {
        props.onModalStateNext();
    };

    return (
        <button className={classes.button} onClick={onClickHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{props.cartMeals.length}</span>
        </button>
    );
};

export default HeaderCartButton;
