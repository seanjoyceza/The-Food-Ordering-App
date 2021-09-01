import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpeg";

import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes.mainImage}>
                <img src={mealsImage} alt="Meals atop a Dining Table" />
            </div>
        </Fragment>
    );
};

export default Header;
