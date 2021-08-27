import React from "react";
import MealItem from "./MealItem";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
    return (
        <section className={classes.meals}>
            <Card>
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
        </section>
    );
};

export default AvailableMeals;
