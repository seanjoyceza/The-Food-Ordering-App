import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const cartCtx = useContext(CartContext);

    return (
        <li className={classes["cart-item"]}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>${props.price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={cartCtx.onAddHandler}>+</button>
                <button onClick={cartCtx.onRemoveHandler}>-</button>
            </div>
        </li>
    );
};

export default CartItem;
