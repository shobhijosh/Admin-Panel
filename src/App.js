import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/single/Product";
import Notification from "./pages/notification/Notification";
import Orders from "./pages/orders/Orders";
import ViewOrder from "./pages/orders/ViewOrder";
import Categories from "./pages/categories/Categories";
import Users from "./pages/users/Users";
import Order from "./pages/order/Order";
import Login from "./components/login/Login";
import GoToTop from "./components/GoToTop";
import PushNotification from "./pages/notification/PushNotification";
import Sellers from "./pages/sellers/Sellers";
import AddSeller from "./pages/addSeller/AddSeller";
import AddUser from "./pages/addUser/AddUser";
import Earnings from "./pages/earnings/Earnings";
import ViewSeller from "./pages/sellers/ViewSeller";
import ViewUser from "./pages/users/ViewUser";
import News from "./pages/news/News";
import PushNews from './pages/news/PushNews';
import Admins from "./pages/admins/Admins";
import AddAdmin from "./pages/admins/AddAdmin";
import StaticProducts from "./pages/static/StaticProducts";
import AddStaticProduct from "./pages/static/AddStaticProduct";


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
        <Route path="viewOrder" element={<ViewOrder />} />
        <Route path="notification" element={<Notification />} />
        <Route path="notification/push" element={<PushNotification />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products">
          <Route index element={<Products />} />
          {/* <Route path=":productId" element={<Product />} /> */}
        </Route>
        <Route path='products/addProduct' element={<Product />} />
        <Route path="sellers" element={<Sellers />} />
        <Route path="sellers/addSeller" element={<AddSeller />} />
        <Route path="viewSeller" element={<ViewSeller />} />
        <Route path="users" element={<Users />} />
        <Route path="users/addUser" element={<AddUser />} />
        <Route path="viewUser" element={<ViewUser />} />
        <Route path="login" element={<Login />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="news" element={<News />} />
        <Route path="news/push" element={<PushNews />} />
        <Route path="admins" element={<Admins />} />
        <Route path="admins/addAdmin" element={<AddAdmin />} />
        <Route path="staticProducts" element={<StaticProducts />} />
        <Route path="staticProducts/addProduct" element={<AddStaticProduct />} />
      </Routes>
    </div>
  );
}

export default App;
