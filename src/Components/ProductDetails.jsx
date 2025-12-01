import { Link, useLoaderData, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import axios from "axios";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    name,
    price,
    origin,
    rating,
    quantity,
    category,
    supplier,
    brand,
    shortDescription,
    fullDescription,
    image,
    userName,
    email,
    createdAt,
  } = product;

  // Read More state
  const [showFullShortDesc, setShowFullShortDesc] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const handleImport = () => {
    if (!user) {
      Swal.fire({
        title: "Login Required!",
        text: "Please login to import products.",
        icon: "warning",
        confirmButtonColor: "#8b5cf6",
      });
      navigate("/login");
      return;
    }

    const importedProduct = {
      productId: _id,
      image,
      name,
      price,
      origin,
      rating,
      email: user.email,
      userName: user.displayName,
    };

    axios
      .post(
        "https://import-export-hub-server-side.vercel.app/imports",
        importedProduct
      )
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Imported Successfully!",
            text: `${name} is added to your imports.`,
            icon: "success",
            confirmButtonColor: "#8b5cf6",
          });
          navigate("/myImports");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Something went wrong!",
          text: "Try again later.",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  // Function to truncate text
  const truncateText = (text, length = 100) => {
    if (!text) return "";
    if (text.length <= length) return text;
    return text.slice(0, length) + "...";
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-purple-600 font-semibold hover:underline"
        >
          <FaArrowLeftLong /> Back To Home
        </Link>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 md:flex gap-6 flex-col md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/2 h-80 object-cover rounded mb-4 md:mb-0"
        />

        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {name}
            </h2>

            <p className="text-gray-700 mb-2">
              <span className="text-purple-600 font-semibold">Price:</span> $
              {price}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-pink-600 font-semibold">Origin:</span>{" "}
              {origin}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-green-600 font-semibold">Rating:</span>{" "}
              {rating}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-blue-600 font-semibold">Available:</span>{" "}
              {quantity}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-indigo-600 font-semibold">Category:</span>{" "}
              {category}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-teal-600 font-semibold">Brand:</span>{" "}
              {brand}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-orange-600 font-semibold">Supplier:</span>{" "}
              {supplier}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-gray-500 font-semibold">Added By:</span>{" "}
              {userName} ({email})
            </p>
            <p className="text-gray-500 mb-2">
              <span className="font-semibold">Added On:</span>{" "}
              {new Date(createdAt).toLocaleDateString()}
            </p>

            {/* Short Description with Read More */}
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-lg">Short Description:</span>{" "}
              {showFullShortDesc
                ? shortDescription
                : truncateText(shortDescription, 80)}
              {shortDescription.length > 80 && (
                <button
                  onClick={() => setShowFullShortDesc(!showFullShortDesc)}
                  className="ml-2 text-purple-600 font-semibold hover:underline"
                >
                  {showFullShortDesc ? "Read Less" : "Read More"}
                </button>
              )}
            </p>

            {/* Full Description with Read More */}
            <p className="text-gray-700">
              <span className="font-semibold text-lg">Full Description:</span>{" "}
              {showFullDesc
                ? fullDescription
                : truncateText(fullDescription, 150)}
              {fullDescription.length > 150 && (
                <button
                  onClick={() => setShowFullDesc(!showFullDesc)}
                  className="ml-2 text-purple-600 font-semibold hover:underline"
                >
                  {showFullDesc ? "Read Less" : "Read More"}
                </button>
              )}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleImport}
              className="w-full sm:w-1/2 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-500"
            >
              Import Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
