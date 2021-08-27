import React, { Fragment } from "react";
import Cart from "../../Cart/Cart";

import classes from "./Modal.module.css";

const Modal = (props) => {
    const onClickHandler = () => {
        props.onModalState();
    };
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={onClickHandler}></div>
            <div className={classes.modal}>
                <Cart
                    cartMeals={props.cartMeals}
                    onModalChange={onClickHandler}
                />
            </div>
        </Fragment>
    );
};

export default Modal;
