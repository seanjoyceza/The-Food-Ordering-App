import React, { useContext } from "react";
import CartItem from "./CartItem";
import UserCartContext from "../../store/user-cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
    const userCartCtx = useContext(UserCartContext);

    const orderHandler = () => {
        console.log("Ordering...");
    };

    const totalAmount = `€${userCartCtx.totalAmount.toFixed(2)}`;
    const hasItems = userCartCtx.length > 0;

    const cartItemRemoveHandler = (id) => {};

    const cartItemAddHandler = (item) => {};

    const cartItems = (
        <ul className={classes.cartItems}>
            {userCartCtx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                );
            })}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onClose}
                >
                    Close
                </button>
                {hasItems && (
                    <button className={classes.button} onClick={orderHandler}>
                        Order
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
