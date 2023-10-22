import Swal from "sweetalert2";

const Cart = ({ cart, products, setProducts }) => {
  const { _id, image, name, brand, type, price, description, rating } = cart;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove ${name} from your cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://technology-shop-server-7aa3x7vnr-rakibs-projects-5f41d311.vercel.app/mycart/${_id}`,
          {
            method: "delete",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Removed!",
                `${name} has been removed from your cart`,
                "success"
              );
              const remaining = products.filter(
                (product) => product._id !== _id
              );
              setProducts(remaining);
            }
          });
      }
    });
  };
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
          <button
            onClick={() => handleDelete(_id)}
            className="btn hover:btn-warning absolute bottom-5"
          >
            Delete From Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
