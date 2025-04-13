import React, { useEffect, useState } from "react";
import api from "./api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.get("/dashboard");
        setUsername(response.data.username);
      } catch (error) {
        console.log(error.response?.data || error.message);
        navigate("/login");
      }
    };
    fetchUserInfo();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await api.post("/logout");
      navigate("/");
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-center mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4">{`Welcome to the Dashboard, ${username}`}</h2>
          <p className="text-gray-700">
            Here you can manage your data and settings.
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
