import React from "react";
import Cart from "../../Cart/Cart";

import classes from "./Modal.module.css";

const Modal = (props) => {
    return (
        <>
            <div className={classes.backdrop}></div>
            <div className={classes.modal}>
                <Cart />
            </div>
        </>
    );
};

export default Modal;
