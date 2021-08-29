import ReactDOM from "react-dom";
import { CartContextProvider } from "./store/cart-context";
import { InputContextProvider } from "./store/input-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
    <CartContextProvider>
        <InputContextProvider>
            <App />
        </InputContextProvider>
    </CartContextProvider>,
    document.getElementById("root")
);
