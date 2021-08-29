import React, { useState } from "react";

const InputContext = React.createContext({
    enteredAmount: 1,
    setEnteredAmount: () => {},
});

export const InputContextProvider = (props) => {
    const [enteredAmount, setEnteredAmount] = useState(1);

    return (
        <InputContext.Provider
            value={{
                enteredAmount: enteredAmount,
                setEnteredAmount: setEnteredAmount,
            }}
        >
            {props.children}
        </InputContext.Provider>
    );
};

export default InputContext;
