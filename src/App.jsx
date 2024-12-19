import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />

              {/* <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        /> */}
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
