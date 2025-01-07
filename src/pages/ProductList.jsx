import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, fetchProduct } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import action_key from "../constants/action-key";
import { EmptyPage } from "./EmptyPage";

export const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-red-500"></div>
  </div>
);

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addedProducts, setAddedProducts] = useState(new Set());
  const {filteredProduct, loading, error } = useSelector(
    (state) => state.product
  );
  const { items } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("access_token");
    const existingItem = items.find((item) => item.id === product.id);

    if (!token) {
      navigate("/login");
      return;
    }

    if (existingItem && existingItem.quantity >= 20) {
      alert("Quantity tidak terpenuhi - maksimum 20 item");
      return;
    }

    await dispatch(addToCart(product));
    setAddedProducts((prev) => new Set([...prev, product.id]));
  };

  const filterByCategory = (category) => {
    dispatch({
      type: action_key.FILTER_PRODUCT,
      payload: category,
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <EmptyPage />;
  }

  return (
    <div>
      {/* CTA START */}
      <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Berbagai Perlengkapan Anda!
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Kami menyediakan berbagai kebutuhan Anda, mulai dari pakaian, tas, hingga elektronik berkualitas tinggi dengan harga yang terjangkau. Temukan solusi belanja terbaik di sini!
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="/#product1"
                className="inline-block rounded-full bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-100"
              >
                Dapatkan Sekarang!
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA END */}

      <div
        className="flex justify-center mb-2 mt-16 gap-5 items-center"
        id="product1"
      >
        <button
          className="hover:overline font-sans font-semibold transition ease-in-out ml-2 hover:text-red-500"
          onClick={() => filterByCategory("All")}
        >
          All
        </button>
        <button
          className="hover:overline font-sans font-semibold transition ease-in-out ml-2 hover:text-red-500"
          onClick={() => filterByCategory("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="hover:overline font-sans font-semibold transition ease-in-out ml-2 hover:text-red-500"
          onClick={() => filterByCategory("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="hover:overline font-sans font-semibold transition ease-in-out ml-2 hover:text-red-500"
          onClick={() => filterByCategory("jewelery")}
        >
          Jewelry
        </button>
        <button
          className="hover:overline font-sans font-semibold transition ease-in-out ml-2 hover:text-red-500"
          onClick={() => filterByCategory("electronics")}
        >
          Electronics
        </button>
      </div>

      <div className="container mx-auto px-1 -mt-4 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-5">
          {filteredProduct.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-xs bg-white border-gray-700 rounded-lg shadow-lg mx-2 my-2 flex flex-col justify-between"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image || "/public/images/shoes1.jpg"}
                  alt={product.name}
                  className="p-8 rounded-t-lg object-cover h-64 w-full"
                />
              </Link>
              <div className="px-5 pb-4">
                <a href="">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {product.title.substring(0, 60)}...
                  </h5>
                  <p className="text-sm text-gray-600 mt-2">
                    {product.description.substring(0, 150)}...
                  </p>
                </a>
              </div>
              <div className="flex items-center justify-between px-5 pb-5">
                <span className="text-lg font-bold text-gray-700">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
                <Link
                  to={`/product/${product.id}`}
                  className="hover:overline font-serif transition ease-in-out ml-1"
                >
                  Detail
                </Link>
                <button
                  className={`bg-red-500 text-sm h-10 px-2 font-semibold rounded-md text-white 
        ${
          addedProducts.has(product.id)
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-red-600"
        }`}
                  onClick={() => handleAddToCart(product)}
                  disabled={addedProducts.has(product.id)}
                >
                  {addedProducts.has(product.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList
