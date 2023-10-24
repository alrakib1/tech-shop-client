
import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { Helmet } from "react-helmet";


const NokiaProduct = () => {
  const data = useLoaderData();
    
    const nokiaProducts = data.filter((data) => data.brand == "Nokia");
    console.log(nokiaProducts)
    if(nokiaProducts.length <= 0){
        return (
            <div
            className="max-w-7xl mx-auto h-96 flex justify-center items-center">
              <Helmet>
          <title>TechLand || Nokia Products</title>
        </Helmet>
                <h2 className="text-4xl font-semibold text-center ">Products coming soon</h2>
            </div>
        )
    }
  else{
    return (
        <div className="max-w-7xl mx-auto mb-10">
           <Helmet>
          <title>TechLand || Nokia Products</title>
        </Helmet>
          <h2 className="text-4xl font-bold mb-10">Nokia Products</h2>
          <div className="grid grid-cols-2 mx-auto">
            {nokiaProducts.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </div>
        </div>
      );
  }
    
  };

export default NokiaProduct;