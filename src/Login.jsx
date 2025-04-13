import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/login", { email, password });
      console.log("Logging in with:", { email, password });
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-center mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
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
              className={`${
                loading ? "cursor-not-allowed bg-blue-300" : "cursor-pointer"
              } w-full py-2 bg-blue-500 text-white rounded-md`}
            >
              {loading ? "Logginng in...." : "Login"}
            </button>
          </form>
          <div className="text-right mt-2">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="cursor-pointer text-blue-500 hover:underline text-sm "
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
