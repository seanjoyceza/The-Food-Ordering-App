import React, { useState, Fragment } from "react";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Header from "./components/UI/Header/Header";
import Modal from "./components/UI/Modal/Modal";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const CART_MEALS = [
    {
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
];

function App() {
    const [modalState, setModalState] = useState(false);

    const setModalStateHandler = () => {
        setModalState(() => {
            if (modalState === true) {
                return false;
            } else {
                return true;
            }
        });
    };

    return (
        <Fragment>
            {modalState && (
                <Modal
                    cartMeals={CART_MEALS}
                    onModalState={setModalStateHandler}
                />
            )}
            <Header
                onModalState={setModalStateHandler}
                cartMeals={CART_MEALS}
            />
            <main>
                <MealsSummary />
                <br />
                <AvailableMeals meals={DUMMY_MEALS} />
            </main>
        </Fragment>
    );
}

export default App;
