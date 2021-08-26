import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

const Header = () => {
    return (
        <>
            <div className={classes.header}>
                <h2>ReactMeals</h2>
                <HeaderCartButton />
            </div>
            <div className={classes.mainImage}>
                <img
                    src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
                    alt="Meals atop a Dining Table"
                />
            </div>
        </>
    );
};

export default Header;
