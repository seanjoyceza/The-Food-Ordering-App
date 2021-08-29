import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import InputContext from "../../store/input-context";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const ctx = useContext(InputContext);

    const submitHandler = (event) => {
        event.preventDefault();
    };

    const clickHandler = (event) => {
        cartCtx.setCartMeals((prevState) => {
            if (prevState.length === 0) {
                return [
                    ...prevState,
                    {
                        id: Math.random(),
                        name: props.name,
                        description: props.description,
                        price: props.price,
                        amount: ctx.enteredAmount,
                    },
                ];
            } else {
                for (let i = 0; i < prevState.length; i++) {
                    if (prevState[i].name === props.name) {
                        prevState[i].amount =
                            parseInt(prevState[i].amount) +
                            parseInt(ctx.enteredAmount);
                        return prevState;
                    } else {
                        return [
                            ...prevState,
                            {
                                id: Math.random(),
                                name: props.name,
                                description: props.description,
                                price: props.price,
                                amount: ctx.enteredAmount,
                            },
                        ];
                    }
                }
            }
        });
    };

    return (
        <div className={classes.meal}>
            <span>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>${props.price}</p>
            </span>
            <MealItemForm
                submitHandler={submitHandler}
                cickHandler={clickHandler}
            />
        </div>
    );
};

export default MealItem;
