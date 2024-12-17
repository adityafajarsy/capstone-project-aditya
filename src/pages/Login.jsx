import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginFailed, setLoginFailed] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginFailed("");

    try {
      const apiURL = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiURL}/auth/login`, user);

      localStorage.setItem("access_token", response.data.token);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.error("Error during login:", err);
      setLoginFailed("You have entered an invalid username or password.");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="items-center mx-auto max-w-lg">
        <div className="mt-48 mb-56 my-auto rounded-lg shadow-lg sm:p-6 lg:p-8 border ">
          <h1 className="text-2xl font-bold text-red-500 sm:text-3xl">Login</h1>
          <p className="font-medium text-slate-500 mb-8 mt-3">
            Welcome, Please enter your details
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                username
              </label>
              <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                type="text"
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                placeholder="johnd"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Password{" "}
                <span className="opacity-35 font-thin"> pass : m38rmF$</span>
              </label>
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
                placeholder="*****"
              />
            </div>
            <button
              type="submit"
              className={`h-10 px-6 font-semibold rounded-md bg-red-500 text-white w-full flex items-center justify-center ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Tombol dinonaktifkan saat loading
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Login"
              )}
            </button>
            {loginFailed && (
              <p className="text-red-500 text-center mt-3">{loginFailed}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
