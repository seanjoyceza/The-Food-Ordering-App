import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import InputContext from "../../store/input-context";
import CartContext from "../../store/cart-context";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const ctx = useContext(InputContext);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(ctx.enteredAmount);
        console.log(props.name);
        console.log(cartCtx.cartMeals);
        cartCtx.setCartMeals((prevState) => {
            return [
                ...prevState,
                {
                    id: Math.random(),
                    name: props.name,
                    description: props.description,
                    price: props.price,
                },
            ];
        });
    };

    return (
        <div className={classes.meal}>
            <span>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>${props.price}</p>
            </span>
            <MealItemForm submitHandler={submitHandler} />
        </div>
    );
};

export default MealItem;
