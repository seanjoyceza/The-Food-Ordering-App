import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import InputContext from "../../../store/input-context";
import UserCartContext from "../../../store/user-cart-context";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
    const price = `$${props.price}`;
    const cartCtx = useContext(CartContext);
    const ctx = useContext(InputContext);
    const userCartCtx = useContext(UserCartContext);

    const clickHandler = () => {
        cartCtx.setCartMeals((prevState) => {
            if (prevState.length === 0) {
                const newState = [
                    {
                        id: Math.random(),
                        name: props.name,
                        description: props.description,
                        price: props.price,
                        amount: ctx.enteredAmount,
                    },
                ];
                cartCtx.updateTotal(newState);
                cartCtx.updateCartNumber(newState);
                return newState;
            } else {
                let counter = "NOT_IN_LIST";
                for (let i = 0; i < prevState.length; i++) {
                    if (prevState[i].name === props.name) {
                        counter = "IN_LIST";
                        prevState[i].amount =
                            prevState[i].amount + parseInt(ctx.enteredAmount);
                        cartCtx.updateTotal(prevState);
                        cartCtx.updateCartNumber(prevState);
                        return prevState;
                    } else {
                        counter = "NOT_IN_LIST";
                    }
                }
                if (counter === "NOT_IN_LIST") {
                    const newState = [
                        ...prevState,
                        {
                            id: Math.random(),
                            name: props.name,
                            description: props.description,
                            price: props.price,
                            amount: ctx.enteredAmount,
                        },
                    ];
                    cartCtx.updateTotal(newState);
                    cartCtx.updateCartNumber(newState);
                    return newState;
                }
            }
        });
    };

    const addToCartHandler = (amount) => {
        userCartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{price}</p>
            </div>
            <MealItemForm
                id={props.id}
                cickHandler={clickHandler}
                onAddtoCart={addToCartHandler}
            />
        </li>
    );
};

export default MealItem;
