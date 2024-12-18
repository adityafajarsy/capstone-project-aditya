import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchDetailProduct } from "../store/action";
import { Loader } from "./ProductList";
import { EmptyPage } from "./EmptyPage";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addedProducts, setAddedProducts] = useState(new Set());

  const { loading, error, product } = useSelector((state) => state.product);
  const { items } = useSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailProduct(id));
    }
  }, [dispatch, id]);

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

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <EmptyPage />;
  }

  if (!product || !Object.keys(product).length) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="text-gray-600 body-font overflow-hidden mb-60">
        {Object.keys(product).length > 0 && (
          <div className="container px-5 py-24 mx-auto my-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-28 object-cover object-center rounded"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">
                      {product.rating.rate}/5 ({product.rating.count})
                    </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"></span>
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900 mt-5">
                    {product.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                  <button
                    className={`flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded ml-48 mt-5 
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
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-5 mt-5">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <Link
                  to="/"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-black underline hover:no-underline mt-7 ml-80"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
