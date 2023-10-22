import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { AuthContext } from "../providers/AuthProvider";


const DellProducts = () => {
    const { loading } = useContext(AuthContext);
    const data = useLoaderData();
    if (loading) {
      return (
        <span className="loading loading-bars loading-lg mx-auto max-w-7xl flex justify-center items-center"></span>
      );
    }
    const dellProducts = data.filter((data) => data.brand == "Dell");
    
    if(dellProducts.length <= 0){
        return (
            <div
            className="max-w-7xl mx-auto h-96 flex justify-center items-center">
                <h2 className="text-4xl font-semibold text-center ">Products coming soon</h2>
            </div>
        )
    }
    else{
    return (
        <div className="max-w-7xl mx-auto mb-10">
          <h2 className="text-4xl font-bold mb-10">Dell Products</h2>
          <div className="grid grid-cols-2 gap-10 mx-auto">
            {dellProducts.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </div>
        </div>
      );
    }
    
    };


export default DellProducts;