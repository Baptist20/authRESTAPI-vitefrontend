import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await api.post("/register", { username, email, password });
      console.log("Registering with:", { username, email, password });
      navigate("/login"); // Navigate to login after successful registration
    } catch (error) {
      setErrorMessage(error.message || error.response?.data);
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-center mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full py-2 bg-blue-500 text-white rounded-md"
            >
              Register
            </button>
            <small className="text-red-500">{errorMessage}</small>
          </form>
        </div>
      </div>
    </div>
  );
}
