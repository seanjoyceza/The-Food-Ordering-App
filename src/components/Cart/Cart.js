import React, { useContext, Fragment } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = () => {
    const orderHandler = () => {
        console.log("Ordering...");
    };

    const ctx = useContext(CartContext);

    return (
        <Fragment>
            <div className={classes.cartItems}>
                {ctx.cartMeals.map((meal) => {
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
                <button onClick={ctx.modalState}>Close</button>
                <button onClick={orderHandler}>Order</button>
            </div>
        </Fragment>
    );
};

export default Cart;
