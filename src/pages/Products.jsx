
import { Link } from "react-router-dom";


const Products = ({product}) => {
    const {_id, image, name, brand, type, price, rating} = product;
    return (
            <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
               
  <figure className="px-10 pt-10">
    <img src={image} className="rounded-xl w-1/2" />
  </figure>
  <div className="p-10 items-center">
    <h2 className="card-title">{name}</h2>
    <p>Brand : {brand}</p>
    <p>Type : {type}</p>
    <p>Price : {price}</p>
    <p>Rating : {rating}</p>
    <div className="card-actions mx-auto flex justify-center items-center mt-10">
    <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
      <Link to={`/update/${_id}`}> <button className="btn btn-primary">Update</button></Link>
     
    </div>
  </div>
</div>
        
    );
};

export default Products;