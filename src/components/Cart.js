import { useSelector } from "react-redux";
import CategoryCards from "./CategoryCards";

const Cart=()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    // console.log(cartItems);
    return (
        <div className="text-center m-4 p-4">
        <div className="text-2xl font-semibold">Cart</div>
        <div>
            <CategoryCards item={cartItems}/>
        </div>
        </div>
    );
};

export default Cart;