import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import man_banner from "./Components/Assets/banner_mens.png";
import woman_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

const App = () => {
  const [loginActive, setLoginActive] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  return (
    <div>
      <BrowserRouter>
        <Navbar
          loginActive={loginActive}
          handleLoginActive={setLoginActive}
          cart={cart}
        />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={man_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={woman_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route
            path="/product"
            element={
              <Product
                cart={cart}
                handleSetCart={setCart}
                loginActive={loginActive}
              />
            }
          >
            <Route path="/product/:id" element={<Product />} />
          </Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} handleSetCart={setCart} />}
          />
          <Route
            path="/login"
            element={
              <Login
                loginActive={loginActive}
                handleLoginActive={setLoginActive}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
