import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/single/Product";
import Notification from "./pages/notification/Notification";
import Orders from "./pages/orders/Orders";
import Categories from "./pages/categories/Categories";
import Users from "./pages/users/Users";
import Order from "./pages/order/Order";
import Login from "./components/login/Login";
import GoToTop from "./components/GoToTop";

function App() {
  return (
    <div className="mainApp">
      <GoToTop />
      <Routes >
        <Route index element={<Home />} />
        <Route path="orders">
          <Route index element={<Orders />} />
          <Route path=":orderId" element={<Order />} />
        </Route>
        <Route path="notification" element={<Notification />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products">
          <Route index element={<Products />} />
          {/* <Route path=":productId" element={<Product />} /> */}
        </Route>
        <Route path='products/addProduct' element={<Product />} />
        <Route path="users" element={<Users />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
