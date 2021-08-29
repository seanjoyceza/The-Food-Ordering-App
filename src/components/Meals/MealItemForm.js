import React, { useContext } from "react";
import InputContext from "../../store/input-context";

import classes from "./MealItemForm.module.css";
import inputClasses from "../UI/Input.module.css";

const MealItemForm = (props) => {
    const ctx = useContext(InputContext);

    const amountChangeHandler = (event) => {
        ctx.setEnteredAmount(event.target.value);
    };

    return (
        <form className={classes.form} onSubmit={props.submitHandler}>
            <div className={inputClasses.input}>
                <label htmlFor="amount">Amount</label>
                <input
                    min="1"
                    type="number"
                    id="amount"
                    name="amount"
                    defaultValue="1"
                    onChange={amountChangeHandler}
                ></input>
            </div>

            <button onClick={props.cickHandler}>+ Add</button>
        </form>
    );
};

export default MealItemForm;
