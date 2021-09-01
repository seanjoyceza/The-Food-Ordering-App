import React, { useContext } from "react";
import InputContext from "../../../store/input-context";
import Input from "../../UI/input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const ctx = useContext(InputContext);

    const amountChangeHandler = (event) => {
        ctx.setEnteredAmount(event.target.value);
    };

    return (
        <form className={classes.form} onSubmit={props.submitHandler}>
            <Input
                label="Amount"
                input={{
                    id: "amount" + props.id,
                    type: "number",
                    min: 1,
                    max: 5,
                    step: "1",
                    defaultValue: "1",
                }}
                defaultValue={ctx.enteredAmount}
                onChange={amountChangeHandler}
            />

            <button onClick={props.cickHandler}>+ Add</button>
        </form>
    );
};

export default MealItemForm;
