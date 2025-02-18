import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-4">
        <h1 className="text-2xl">Your cart is empty!</h1>
      </div>
    );
  }

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-semibold">Cart</h1>
      <div className="flex flex-col w-6/12 m-auto bg-white">
        <div className="flex justify-end">
          <button
            className="m-4 p-2 rounded-lg bg-purple-200 hover:bg-purple-300 hover:cursor-pointer"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        </div>
        <ItemList items={cartItems} isFromCart={true} />
      </div>
    </div>
  );
};
export default Cart;
