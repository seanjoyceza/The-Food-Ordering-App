import React from "react";
import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
    return (
        <div className={classes.meal}>
            <span>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>${props.price}</p>
            </span>
            <MealItemForm />
        </div>
    );
};

export default MealItem;
