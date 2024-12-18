import { Link } from "react-router-dom";

const Cart = () => {
  
  return (
      <section className="bg-white py-8 antialiasedmd:py-16 mt-4 mb-96">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 mb-24">
          <h2 className="text-3xl font-bold text-red-500">My Cart</h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                <div className="rounded-lg border border-red-200 bg-white p-4 shadow-sm dark:border-gray-400  md:p-6">
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" className="shrink-0 md:order-1">
                      <img
                        className="h-20 w-20 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                        alt="imac image"
                      />
                      <img
                        className="hidden h-20 w-20 dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                        alt="imac image"
                      />
                    </a>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-100 dark:border-white dark:bg-red-500 text-white font-bold"
                        >
                        -
                        </button>
                        <input
                          type="text"
                          className="w-10 h-7 shrink-0 border bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                          placeholder="0"
                          required
                        />
                        <button
                          type="button"
                          className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-100 dark:border-white dark:bg-red-500 text-white"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900">
                          $1,499
                        </p>
                      </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline"
                      >
                        PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple
                        M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU,
                        Keyboard layout INT
                      </a>

                      <div className="flex items-center gap-4">
                        <button
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
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 sm:p-6">
                <p className="text-xl font-semibold text-black">
                  Order summary
                </p>
                <div className="space-y-4">
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">
                      $8,191.00
                    </dd>
                  </dl>
                </div>

                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-100 dark:bg-primary-600 dark:hover:bg-primary-700"
                >
                  Proceed to Checkout
                </a>

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
