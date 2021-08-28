import React, { useState } from "react";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Header from "./components/UI/Header/Header";
import Modal from "./components/UI/Modal/Modal";
import CartContext from "./store/cart-context";
import InputContext from "./store/input-context";

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
        id: Math.random(),
        name: "Lorem",
        description: "Lorem ipsum",
        price: 22.99,
    },
];

function App() {
    const [modalState, setModalState] = useState(false);
    const [cartMeals, setCartMeals] = useState(CART_MEALS);
    const [enteredAmount, setEnteredAmount] = useState(1);

    const modalStateHandler = () => {
        setModalState(() => {
            if (modalState === true) {
                return false;
            } else {
                return true;
            }
        });
    };

    //NEXT -> MOVE STATE LOGIC OUT OF APP.JS COMPONENT
    return (
        <InputContext.Provider
            value={{
                enteredAmount: enteredAmount,
                setEnteredAmount: setEnteredAmount,
            }}
        >
            <CartContext.Provider
                value={{
                    cartMeals: cartMeals,
                    modalState: modalStateHandler,
                    setCartMeals: setCartMeals,
                }}
            >
                {modalState && <Modal />}
                <Header />
                <main>
                    <MealsSummary />
                    <br />
                    <AvailableMeals meals={DUMMY_MEALS} />
                </main>
            </CartContext.Provider>
        </InputContext.Provider>
    );
}

export default App;
