import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";


const MyCart = () => {
    const carts = useLoaderData();
    console.log(carts)
   return(
    <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold pl-4">Your Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto mb-10">
            {
                carts.map(cart=><Cart key={cart._id} cart={cart}></Cart>)
            }
        </div>
    </div>
   )
};

export default MyCart;