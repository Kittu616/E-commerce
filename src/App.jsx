import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";

import Dashboard from "./pages/dashboard";
import Customers from "./pages/customers";
import Analytics from "./pages/analytics";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Order from "./pages/order";
import Products from "./pages/products";
import Notfound from "./pages/not_found";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import "./App.css"

function App() {
  return (
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
