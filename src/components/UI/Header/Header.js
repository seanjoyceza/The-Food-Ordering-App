import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <Fragment>
            <div className={classes.header}>
                <h2>ReactMeals</h2>
                <HeaderCartButton
                    onModalStateNext={props.onModalState}
                    cartMeals={props.cartMeals}
                />
            </div>
            <div className={classes.mainImage}>
                <img
                    src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
                    alt="Meals atop a Dining Table"
                />
            </div>
        </Fragment>
    );
};

export default Header;
