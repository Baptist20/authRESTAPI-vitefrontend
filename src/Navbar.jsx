import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">
          MyApp
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
