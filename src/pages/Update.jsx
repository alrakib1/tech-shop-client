import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { _id, image, name, brand, price, description, rating } =
    useLoaderData();
  const [option, setOption] = useState();

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const type = option;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;
    const updatedProduct = {
      image,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    fetch(
      `https://technology-shop-server-7aa3x7vnr-rakibs-projects-5f41d311.vercel.app/add/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount <= 1) {
          Swal.fire("Success!", "Product has been updated!", "success");
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <form onSubmit={handleUpdate}>
        {/* image and name form */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              defaultValue={image}
              name="image"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              defaultValue={name}
              name="name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* brand name and type form */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              placeholder="Brand"
              name="brand"
              defaultValue={brand}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <select
              name="option"
              className="select select-bordered  w-full border"
              onChange={handleChange}
            >
              <option disabled selected>
                Chose Type
              </option>
              <option>Phone</option>
              <option>Computer</option>
              <option>HeadPhone</option>
            </select>
          </div>
        </div>
        {/* Price and description */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              defaultValue={price}
              name="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              name="description"
              placeholder="Description"
              defaultValue={description}
            ></textarea>
          </div>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            placeholder="Rating"
            defaultValue={rating}
            name="rating"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6 row-span-2">
          <button className="btn btn-primary">Update Product</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
