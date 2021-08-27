import React from "react";
import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const onClickHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className={classes.form}>
            <Input />
            <button onClick={onClickHandler}>+ Add</button>
        </form>
    );
};

export default MealItemForm;
