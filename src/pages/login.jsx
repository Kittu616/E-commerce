import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import "./logincss/logincss.css";

const Login = () => {

  const navigate= useNavigate();

  const [forms, setForm] = useState({
    id: uuidv4(),
    name: "",
    user_id: "",
    email: "",
    phone_no: "",
    status:"completed",
    password: "",
    date: new Date().toDateString(),
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const email_checker = () => {
    const model_email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return model_email.test(forms.email);
  };

  const pass_wordcheck = () => {
    const data = JSON.parse(localStorage.getItem(forms.user_id));
    if (!data) return true;
    return forms.password === data.password;
  };

  const send_file = (e) => {
    e.preventDefault();
    if (!email_checker()) {
      setError("Invalid email format.");
      return;
    }
    if (pass_wordcheck()) {
      localStorage.setItem(forms.user_id, JSON.stringify(forms));
      console.log("Form submitted:", forms);
      setError("");
      navigate("/");
    } else {
      setError("User ID not found or password incorrect.");
      console.error("Validation failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex gap-4 h-[70vh] w-[90vw] max-w-md bg-amber-400 p-10 rounded-lg shadow-lg">
        <form onSubmit={send_file} className="space-y-6">
          <div className="flex gap-4">
            <label className="text-xl w-40 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={forms.name}
              onChange={handleChange}
              className="w-full p-2 outline-none rounded border border-gray-300"
              required
            />
          </div>
          <div className="flex gap-4">
            <label className="text-xl w-40 mb-2">User Id</label>
            <input
              type="text"
              name="user_id"
              value={forms.user_id}
              onChange={handleChange}
              className="w-full p-2 outline-none rounded border border-gray-300"
              required
            />
          </div>
          <div className="flex gap-4">
            <label className="text-xl w-40 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={forms.email}
              onChange={handleChange}
              className="w-full p-2 outline-none rounded border border-gray-300"
              title="Please enter a valid email."
              required
            />
          </div>
          <div className="flex gap-4">
            <label className="text-xl w-40 mb-2">Phone no</label>
            <input
              type="tel"
              name="phone_no"
              value={forms.phone_no}
              className="w-full p-2 outline-none rounded border border-gray-300"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex gap-4">
            <label className="text-xl w-40 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={forms.password}
              minLength={8}
              maxLength={12}
              title="Password must be between 8-12 characters."
              onChange={handleChange}
              className="w-full p-2 outline-none rounded border border-gray-300"
              required
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button  type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
