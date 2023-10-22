import {  useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const {id} = useParams();
    const {image, name, brand, type, price, description, rating}= useLoaderData();

    const newItem = {
      image,name,brand,type,price,description,rating
    }
    console.log(newItem)
    const handleAddCart = (id)=>{
      console.log(id)
      fetch('http://localhost:5000/mycart',{
        method: 'post',
        headers :{
          "content-type" : 'application/json'
        },
        body : JSON.stringify(newItem)
      }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.insertedId){
          Swal.fire(
            'Success!',
            `${name} has been added to your Cart`,
            'success'
          )
        }
      })
    }
   
    return (
        <div className="hero max-w-7xl mx-auto mb-10">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{description}</p>
      <div className="ml-10 mb-10 space-y-3">
      <p className="text-3xl font-semibold">Brand :{brand}</p>
      <p className="font-bold">Type : {type}</p>
      <p className="font-bold">Price : ${price}</p>
      <p className="font-bold">Rating : {rating}</p>
      </div>
      <button onClick={()=>handleAddCart(id)} className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default Details;