import React from "react";
import MealItem from "./MealItem";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
    return (
        <Card className={classes.meals}>
            {props.meals.map((meal) => {
                return (
                    <MealItem
                        key={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                    />
                );
            })}
        </Card>
    );
};

export default AvailableMeals;
