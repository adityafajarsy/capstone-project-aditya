const Login = () => {
  
  return (
    <div>
      <div className="items-center mx-auto max-w-lg">
        <div className="mt-48 mb-56 my-auto rounded-lg shadow-lg sm:p-6 lg:p-8 border ">
          <h1 className="text-2xl font-bold text-red-500 sm:text-3xl">Login</h1>
          <p className="font-medium text-slate-500 mb-8 mt-3">
            Welcome, Please enter your details
          </p>
          <form action="">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                placeholder="*****"
              />
            </div>
            <button className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white w-full">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
