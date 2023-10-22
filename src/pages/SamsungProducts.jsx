import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Products from "./Products";


const SamsungProducts = () => {
  const { loading } = useContext(AuthContext);
  const data = useLoaderData();
  if (loading) {
    return (
      <span className="loading loading-bars loading-lg mx-auto max-w-7xl flex justify-center items-center"></span>
    );
  }
  const samsungProducts = data.filter((data) => data.brand == "Samsung");
  
  if(samsungProducts.length <= 0){
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
        <h2 className="text-4xl font-bold mb-10">Samsung Products</h2>
        <div className="grid grid-cols-2 gap-10 mx-auto">
          {samsungProducts.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      </div>
    );
}
  
};

export default SamsungProducts;


