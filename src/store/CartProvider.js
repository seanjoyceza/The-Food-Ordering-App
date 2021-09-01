import CartContextLatest from "./cart-context-latest";

const CartProvider = (props) => {
    return <CartContextLatest>{props.children}</CartContextLatest>;
};

export default CartProvider;
