

const Cart = ({cart}) => {
    const {_id, image, name, brand, type, price, description, rating} = cart;

    const handleDelete = _id =>{
        console.log(_id)
    }
    return (
            <div className="card w-[280px] md:w-full bg-base-100 shadow-xl mx-auto relative">
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
        <button onClick={()=>handleDelete(_id)} 
        className="btn hover:btn-warning absolute bottom-5">Delete From Cart</button>
     
    </div>
  </div>
</div>
        
    );
};

export default Cart;