import React, { Fragment } from "react";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";
//ADD CART ITEMS HERE INSTEAD OF MEAL ITEMS
const Cart = (props) => {
    const orderHandler = () => {
        console.log("Ordering...");
    };

    return (
        <Fragment>
            <div className={classes.cartItems}>
                {props.cartMeals.map((meal) => {
                    return (
                        <CartItem
                            key={Math.random()}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}
                            amount={1}
                        />
                    );
                })}
            </div>
            <div className={classes.total}>
                <div>Total Amount</div>
                <div>$88.99</div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onModalChange}>Close</button>
                <button onClick={orderHandler}>Order</button>
            </div>
        </Fragment>
    );
};

export default Cart;
