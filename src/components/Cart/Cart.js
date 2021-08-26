import React from "react";
import MealItem from "../Meals/MealItem";

import classes from "./Cart.module.css";
//ADD CART ITEMS HERE INSTEAD OF MEAL ITEMS
const Cart = (props) => {
    return (
        <>
            <MealItem className={classes.cartItems} />
            <div className={classes.total}>
                <div>Total Amount</div>
                <div>$88.99</div>
            </div>
        </>
    );
};

export default Cart;
