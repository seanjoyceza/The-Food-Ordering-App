import React from "react";

import classes from "./Input.module.css";

const Input = () => {
    return (
        <div className={classes.input}>
            <label htmlFor="amount">Amount</label>
            <input
                type="number"
                id="amount"
                name="amount"
                defaultValue="1"
            ></input>
        </div>
    );
};

export default Input;
