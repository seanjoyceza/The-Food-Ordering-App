import React, { useContext, Fragment } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = () => {
    const orderHandler = () => {
        console.log("Ordering...");
    };

    const cartCtx = useContext(CartContext);

    return (
        <Fragment>
            <div className={classes.cartItems}>
                {cartCtx.cartMeals.length === 0 && <h2>Your cart is empty!</h2>}
                {cartCtx.cartMeals.length > 0 &&
                    cartCtx.cartMeals.map((meal) => {
                        return (
                            <CartItem
                                key={Math.random()}
                                name={meal.name}
                                description={meal.description}
                                price={meal.price}
                                amount={meal.amount}
                            />
                        );
                    })}
            </div>
            <div className={classes.total}>
                {cartCtx.cartMeals.length > 0 && <div>Total Amount</div>}
                {cartCtx.cartMeals.length > 0 && <div>€22.99</div>}
            </div>
            <div className={classes.actions}>
                <button onClick={cartCtx.modalStateHandler}>Close</button>
                {cartCtx.cartMeals.length > 0 && (
                    <button onClick={orderHandler}>Order</button>
                )}
            </div>
        </Fragment>
    );
};

export default Cart;
