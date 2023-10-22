import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";


const MyCart = () => {
    const carts = useLoaderData();
    const [products, setProducts] = useState(carts)
    
   return(
    <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold pl-4">Your Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto mb-10">
            {
                products.map(cart=><Cart key={cart._id} products={products} setProducts={setProducts} cart={cart}></Cart>)
            }
        </div>
    </div>
   )
};

export default MyCart;