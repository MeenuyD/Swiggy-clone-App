import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import store from "../utils/store";
import FoodItem from "./FoodItem";


const Cart=()=>{
    const cartItems=useSelector(store=>store.cart.items);
    const dispath=useDispatch();
    const handleClearCart=()=>{
        dispath(clearCart());

    }
    return(
        <div>
            <div className="flex">
            <h1 className="font-bold text-3xl">Cart Item-{cartItems.length}</h1>
            <button className="bg-green-100 p-2 m-5" onClick={handleClearCart()}>

            </button>
            {cartItems.map(item=><FoodItem key={item.id} {...item[0]}/>)}
            </div>
        </div>
    )

};
export default Cart;