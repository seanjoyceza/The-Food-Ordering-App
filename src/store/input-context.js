import React from "react";

const InputContext = React.createContext({
    enteredAmount: 1,
    setEnteredAmount: () => {},
});

export default InputContext;
