import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
    const orderHandler = () => {
        console.log("Ordering...");
    };

    const cartCtx = useContext(CartContext);
    const cartItems = (
        <ul className={classes.cartItems}>
            {cartCtx.cartMeals.map((meal) => {
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
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartCtx.cartMeals.length === 0 && <h2>Your cart is empty!</h2>}
            {cartCtx.cartMeals.length > 0 && cartItems}
            <div className={classes.total}>
                {cartCtx.cartMeals.length > 0 && <div>Total Amount</div>}
                {cartCtx.cartMeals.length > 0 && (
                    <div>€ {cartCtx.priceState}</div>
                )}
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onClose}
                >
                    Close
                </button>
                {cartCtx.cartMeals.length > 0 && (
                    <button className={classes.button} onClick={orderHandler}>
                        Order
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
