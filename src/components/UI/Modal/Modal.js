import React, { Fragment, useContext } from "react";
import CartContext from "../../../store/cart-context";
import Cart from "../../Cart/Cart";

import classes from "./Modal.module.css";

const Modal = () => {
    const ctx = useContext(CartContext);

    return (
        <Fragment>
            <div
                className={classes.backdrop}
                onClick={ctx.modalStateHandler}
            ></div>
            <div className={classes.modal}>
                <Cart />
            </div>
        </Fragment>
    );
};

export default Modal;
