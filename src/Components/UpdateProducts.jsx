import axios from "axios";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    name,
    origin,
    price,
    quantity,
    rating,
    category,
    supplier,
    brand,
    shortDescription,
    fullDescription,
    image,
  } = product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    axios
      .put(
        `https://import-export-hub-server-side.vercel.app/updateProducts/${_id}`,
        data
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Update Product Successfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
          navigate("/myExports");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <Link
        to="/"
        className="text-xl font-semibold flex items-center gap-2 mb-6"
      >
        <FaArrowLeftLong /> Back To Home
      </Link>

      {/* Title + Description */}
      <h2
        className="
          text-3xl 
          md:text-4xl 
          lg:text-5xl 
          font-bold 
          mb-4 
          text-center 
          bg-gradient-to-r 
          from-purple-500 
          via-pink-500 
          to-red-500 
          bg-clip-text text-transparent
        "
      >
        Update Product Information
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Update your product details to keep the information accurate and
        helpful.
      </p>

      {/* FORM START */}
      <form onSubmit={handleUpdateProduct} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Product Name */}
          <div>
            <label className="label">Product Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Origin Country */}
          <div>
            <label className="label">Origin Country</label>
            <input
              type="text"
              name="origin"
              defaultValue={origin}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="label">Rating</label>
            <input
              type="number"
              step="0.1"
              max="5"
              name="rating"
              defaultValue={rating}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Available Quantity */}
          <div>
            <label className="label">Available Quantity</label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Supplier */}
          <div>
            <label className="label">Supplier Name</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input input-bordered w-full"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="label">Brand</label>
            <input
              type="text"
              name="brand"
              defaultValue={brand}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Short Description */}
        <div>
          <label className="label">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            defaultValue={shortDescription}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="label">Full Description</label>
          <textarea
            name="fullDescription"
            defaultValue={fullDescription}
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="label">Product Image (URL)</label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="btn w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold mt-4">
          Update Export/Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProducts;
