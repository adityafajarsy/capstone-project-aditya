import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiURL = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiURL}/products`);
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterByCategory = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error loading products. Please try again later.
      </div>
    );
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
              Kami menyediakan keperluan anda mulai dari pakaian, tas, alat elektronik dengan harga yang murah namun berkualitas Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laborum?.
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

      <div className="flex justify-center mb-2 mt-16 gap-5 items-center"  id="product1">
        <button
          className="hover:overline font-sans font-semibold transition ease-in-out ml-2 hover:text-red-500"
          onClick={() => filterByCategory('All')}
        >
          All
        </button>
        <button
          className="hover:overline font-sans font-semibold transition ease-in-out ml-2 hover:text-red-500"
          onClick={() => filterByCategory('men\'s clothing')}
        >
          Men's Clothing
        </button>
        <button
          className="hover:overline font-sans font-semibold transition ease-in-out ml-2 hover:text-red-500"
          onClick={() => filterByCategory('women\'s clothing')}
        >
          Women's Clothing
        </button>
        <button
          className="hover:overline font-sans font-semibold transition ease-in-out ml-2 hover:text-red-500"
          onClick={() => filterByCategory('jewelery')}
        >
          Jewelry
        </button>
        <button
          className="hover:overline font-sans font-semibold transition ease-in-out ml-2 hover:text-red-500"
          onClick={() => filterByCategory('electronics')}
        >
          Electronics
        </button>
      </div>

      <div className="container mx-auto px-1 -mt-4 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-5">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="w-full max-w-xs bg-white border-gray-700 rounded-lg shadow-lg mx-2 my-2 flex flex-col justify-between"
            >
              <a href="#">
                <img 
                  src={product.image || '/public/images/shoes1.jpg'} 
                  alt={product.name} 
                  className="p-8 rounded-t-lg object-cover h-64 w-full"
                />
              </a>
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
                  {product.price.toLocaleString('id-ID', {style: 'currency', currency: 'USD'})}</span>
                <Link 
                  to={`/product/${product.id}`} 
                  className="hover:overline font-serif transition ease-in-out ml-1"
                >
                  Detail
                </Link>
                <button className="bg-red-500 text-sm h-10 px-2 font-semibold rounded-md text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductList;