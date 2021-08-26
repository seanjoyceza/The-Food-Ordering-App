import React from "react";
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

function App() {
    return (
        <>
            <Modal />
            <Header />
            <MealsSummary />
            <br />
            <AvailableMeals meals={DUMMY_MEALS} />
        </>
    );
}

export default App;
