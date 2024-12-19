import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, removeFromCart, updateCartQuantity } from "../store/action";

const Cart = () => {
  const { items, loading, error } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <EmptyPage />;
  }

  const handleCheckout = () => {
    dispatch(clearCart());
    alert("Thank you for your purchase!");
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h2 className="text-2xl font-bold mb-4">You haven't purchase any products yet</h2>
        <Link
          to="/"
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Kembali ke Home
        </Link>
      </div>
    );
  }

  const Card = (props) => {
    const { item } = props;
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
      dispatch(removeFromCart(item.id));
    };

    const handleQuantityChange = (type) => {
      let newQuantity = item.quantity;
      
      if (type === 'increment') {
        newQuantity += 1;
      } else if (type === 'decrement' && newQuantity > 1) {
        newQuantity -= 1;
      }

      dispatch(updateCartQuantity(item.id, newQuantity));
    };
  
    const handleInputChange = (e) => {
      const value = parseInt(e.target.value) || 1;
      if (value >= 1) {
        dispatch(updateCartQuantity(item.id, value));
      }
    }

    return (
      <div className="space-y-6 mt-4">
        <div className="rounded-lg border border-red-200 bg-white p-4 shadow-sm dark:border-gray-400  md:p-6">
          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <a href="#" className="shrink-0 md:order-1">
              <img
                className="h-20 w-20 dark:hidden"
                src={item?.image}
                alt="imac image"
              />
              <img
                className="hidden h-20 w-20 dark:block"
                src={item?.image}
                alt="imac image"
              />
            </a>
            <div className="flex items-center justify-between md:order-3 md:justify-end">
            <div className="flex items-center gap-2">
                <button
                 onClick={() => handleQuantityChange('decrement')}
                  type="button"
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-100 dark:border-white dark:bg-red-500 text-white font-bold"
                >
                  -
                </button>
                <input
                type="text"
                min="1"
                value={item.quantity}
                onChange={handleInputChange}
                className="w-10 h-7 shrink-0 border text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
              />
                <button
                 onClick={() => handleQuantityChange('increment')}
                  type="button"
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-100 dark:border-white dark:bg-red-500 text-white"
                >
                  +
                </button>
              </div>
              <div className="text-end md:order-4 md:w-32">
                <p className="text-base font-bold text-gray-900">
                {(item.price * item.quantity).toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
              </div>
            </div>

            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <Link
                to="/"
                className="text-lg font-medium text-black hover:underline"
              >
                {item?.title}
              </Link>

              <div className="flex items-center gap-4">
                <button
                  onClick={handleRemoveItem}
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  <svg
                    className="me-1.5 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-8 antialiasedmd:py-16 mt-4 mb-96">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 mb-24">
        <h2 className="text-3xl font-bold text-red-500">My Cart</h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            {items.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 sm:p-6">
              <p className="text-xl font-semibold text-black">Order summary</p>
              <div className="space-y-4">
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900">
                  {total.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'USD',
                })}
                  </dd>
                </dl>
              </div>

              <button
                 onClick={handleCheckout}
                className="flex w-full items-center justify-center rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-100 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                Proceed to Checkout
              </button>


              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-black"> or </span>
                <Link
                  to="/"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-black underline hover:no-underline"
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
        </div>
      </div>
    </section>
  );
};

export default Cart;
